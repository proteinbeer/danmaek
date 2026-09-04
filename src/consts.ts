export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: 'IT, 게임, 도구',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  { name: '뉴스', slug: 'news', description: 'IT와 게임의 주요 이슈를 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/knowledge.gif' },
  { name: '가이드', slug: 'guides', description: '구매, 환불, 설정 같은 실생활에 바로 써먹는 방법을 정리합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '쿠폰', slug: 'coupons', description: '모바일 게임 프로모 코드를 매일 정리해 공유합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '도구', slug: 'tools', description: '계산기, 변환기, 제너레이터 등 바로 쓸 수 있는 온라인 도구 모음입니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' }
] as const;

export type Subcategory = { name: string; slug: string };

export const NEWS_SUBCATEGORIES: Subcategory[] = [
  { name: 'IT', slug: 'it' },
  { name: '게임', slug: 'games' }
];

export const GUIDE_SUBCATEGORIES: Subcategory[] = [
  { name: '스팀', slug: 'steam' },
  { name: '윈도우 11', slug: 'windows-11' },
  { name: '플스', slug: 'ps' },
  { name: 'PC·하드웨어', slug: 'pc-hardware' },
  { name: '네트워크', slug: 'network' },
  { name: '주변기기', slug: 'peripherals' }
];

export const COUPON_SUBCATEGORIES: Subcategory[] = [
  { name: '메이플 키우기', slug: 'maple-raising' },
  { name: '탕탕특공대', slug: 'tangtang-special-force' },
  { name: '쿠키런: 킹덤', slug: 'cookie-run-kingdom' },
  { name: '나 혼자만 레벨업', slug: 'solo-leveling' },
  { name: 'AFK 아레나', slug: 'afk-arena' },
  { name: '소울 나이트', slug: 'soul-knight' },
  { name: '원펀맨: 영웅의 길', slug: 'one-punch-road' }
];

export const categoryToPath: Record<string, string> = {
  뉴스: '/news/',
  가이드: '/guides/',
  쿠폰: '/coupons/',
  도구: '/tools/'
};
