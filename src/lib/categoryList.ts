import type { Post } from './posts';
import { getPostsByCategory } from './posts';

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
