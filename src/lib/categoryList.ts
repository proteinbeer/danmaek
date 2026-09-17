import type { Post } from './posts';
import { getPostsByCategory } from './posts';

export const LIST_PER_PAGE = 30;
export const GAME_PER_SUBCATEGORY_CAP = 5;

export type ListCategory = '게임' | 'IT';

export const categorySlug: Record<ListCategory, string> = {
  게임: 'games',
  IT: 'it'
};

const capBySubcategory = (posts: Post[], maxPerSub: number): Post[] => {
  const count = new Map<string, number>();
  const result: Post[] = [];
  for (const post of posts) {
    const key = post.data.subcategory || '기타';
    const seen = count.get(key) ?? 0;
    if (seen >= maxPerSub) continue;
    count.set(key, seen + 1);
    result.push(post);
  }
  return result;
};

export const getCategoryListPosts = (category: ListCategory): Post[] => {
  const posts = getPostsByCategory(category);
  return category === '게임' ? capBySubcategory(posts, GAME_PER_SUBCATEGORY_CAP) : posts;
};

export const getCategoryListPages = (category: ListCategory): number =>
  Math.max(1, Math.ceil(getCategoryListPosts(category).length / LIST_PER_PAGE));

export const categoryListPageUrl = (category: ListCategory, page: number): string =>
  page <= 1 ? `/${categorySlug[category]}/` : `/${categorySlug[category]}/page/${page}/`;