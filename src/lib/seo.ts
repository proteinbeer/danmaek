import { CATEGORIES, SITE } from '../consts';
import { getPosts } from './posts';
import { TOOLS } from './tools';

export type SitemapEntry = {
  url: string;
  lastmod?: Date;
};

const stablePages = [
  '/contact/',
  '/privacy/'
] as const;

const categoryPages = CATEGORIES.map((category) => `/${category.slug}/`);
const toolPages = ['/tools/', ...TOOLS.map((tool) => `/tools/${tool.slug}/`)];

export const absoluteUrl = (pathname: string) => new URL(pathname, SITE.url).toString();

export const getSitemapEntries = (): SitemapEntry[] => {
  const posts = getPosts();
  const latestPostDate = posts[0]?.data.updated ?? posts[0]?.data.date;
  const entries = [
    { url: absoluteUrl('/'), lastmod: latestPostDate },
    ...stablePages.map((page) => ({ url: absoluteUrl(page) })),
    ...categoryPages.map((page) => ({ url: absoluteUrl(page), lastmod: latestPostDate })),
    ...toolPages.map((page) => ({ url: absoluteUrl(page) })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/posts/${post.id}/`),
      lastmod: post.data.updated ?? post.data.date
    }))
  ];
  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
};

export const formatW3CDate = (date: Date) => date.toISOString().slice(0, 10);
