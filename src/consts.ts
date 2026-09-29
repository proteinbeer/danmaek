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
    description: '',
    image: 'https://img.danmaek.com/images/og-default.jpg'
  }
] as const;

export type Subcategory = { name: string; slug: string; description?: string; metaDescription?: string };
export type ToolSubcategory = { name: string; slug: string; categories: string[] };

export const IT_SUBCATEGORIES: Subcategory[] = [
  {
    name: '디스코드',
    slug: 'discord',
    metaDescription: '디스코드 설정 변경 방법을 직접 정리한 글 모음입니다. 화면 오버레이 끄기, 자동 실행 끄기, 서버 알림 음소거, 마이크 입력 감도 조절까지 실제로 손댄 항목을 담았습니다.'
  }
];
export const GAME_SUBCATEGORIES: Subcategory[] = [];
export const GAME_NAME_TAGS: string[] = [];
export const COUPON_SUBCATEGORIES: Subcategory[] = [];
export const TOOL_SUBCATEGORIES: ToolSubcategory[] = [];

export const categoryToPath: Record<string, string> = {
  IT: '/it/'
};
