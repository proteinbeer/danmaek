export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: 'PC와 프로그램을 직접 사용하면서 겪은 문제와 해결 과정을 기록합니다.',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  {
    name: 'IT',
    slug: 'it',
    description: 'PC와 프로그램을 직접 사용하면서 겪은 문제, 시도한 방법, 해결 과정과 결과를 기록합니다.',
    image: 'https://img.danmaek.com/images/og-default.jpg'
  }
] as const;

export type Subcategory = { name: string; slug: string };
export type ToolSubcategory = { name: string; slug: string; categories: string[] };

export const IT_SUBCATEGORIES: Subcategory[] = [];
export const GAME_SUBCATEGORIES: Subcategory[] = [];
export const GAME_NAME_TAGS: string[] = [];
export const COUPON_SUBCATEGORIES: Subcategory[] = [];
export const TOOL_SUBCATEGORIES: ToolSubcategory[] = [];

export const categoryToPath: Record<string, string> = {
  IT: '/it/'
};
