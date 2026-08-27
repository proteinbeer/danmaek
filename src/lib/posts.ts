type PostModule = {
  frontmatter: Record<string, unknown>;
  Content: unknown;
};

export type Post = {
  id: string;
  data: {
    title: string;
    description: string;
    date: Date;
    updated?: Date;
    category: '영화' | '드라마' | '게임' | '지식';
    tags: string[];
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    hideHeroImage: boolean;
    hideDescription: boolean;
    featured: boolean;
    draft: boolean;
  };
  Content: unknown;
};

const modules = import.meta.glob<PostModule>('../content/posts/*.md', { eager: true });

const toDate = (value: unknown) => value instanceof Date ? value : new Date(String(value));
const toStringArray = (value: unknown) => Array.isArray(value) ? value.map(String) : [];
const toBoolean = (value: unknown) => value === true;
const toNumber = (value: unknown, fallback: number) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

const slugFromPath = (path: string) => path.split('/').pop()?.replace(/\.(md|mdx)$/, '') ?? path;

const normalizePost = ([path, mod]: [string, PostModule]): Post => {
  const frontmatter = mod.frontmatter;
  return {
    id: slugFromPath(path),
    data: {
      title: String(frontmatter.title ?? ''),
      description: String(frontmatter.description ?? ''),
      date: toDate(frontmatter.date),
      updated: frontmatter.updated ? toDate(frontmatter.updated) : undefined,
      category: String(frontmatter.category ?? '지식') as Post['data']['category'],
      tags: toStringArray(frontmatter.tags),
      image: String(frontmatter.image ?? 'https://img.danmaek.com/images/og-default.jpg'),
      imageAlt: String(frontmatter.imageAlt ?? ''),
      imageWidth: toNumber(frontmatter.imageWidth, 1200),
      imageHeight: toNumber(frontmatter.imageHeight, 675),
      hideHeroImage: toBoolean(frontmatter.hideHeroImage),
      hideDescription: toBoolean(frontmatter.hideDescription),
      featured: toBoolean(frontmatter.featured),
      draft: toBoolean(frontmatter.draft)
    },
    Content: mod.Content
  };
};

export const posts = Object.entries(modules)
  .map(normalizePost)
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const getPosts = () => posts;

export const getPostsByCategory = (category: Post['data']['category']) =>
  posts.filter((post) => post.data.category === category);
