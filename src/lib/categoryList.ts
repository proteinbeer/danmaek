import type { Post } from './posts';
import { getPostsByCategory } from './posts';
import { IT_SUBCATEGORIES } from '../consts';

export const LIST_PER_PAGE = 30;

export type ListCategory = 'IT';

export const categorySlug: Record<ListCategory, string> = {
  IT: 'it'
};

export const getCategoryListPosts = (category: ListCategory): Post[] =>
  getPostsByCategory(category);

export const getCategoryListPages = (category: ListCategory): number =>
  Math.max(1, Math.ceil(getCategoryListPosts(category).length / LIST_PER_PAGE));

export const categoryListPageUrl = (category: ListCategory, page: number): string =>
  page <= 1 ? `/${categorySlug[category]}/` : `/${categorySlug[category]}/page/${page}/`;

export const subcategoryPath = (category: ListCategory, slug: string): string =>
  `/${categorySlug[category]}/${slug}/`;

export const getSubcategoryInfo = (
  category: Post['data']['category'],
  name: string
): { name: string; path: string } | undefined => {
  if (!name) return undefined;
  const sub = IT_SUBCATEGORIES.find((item) => item.name === name);
  if (!sub) return undefined;
  return { name: sub.name, path: subcategoryPath(category, sub.slug) };
};
