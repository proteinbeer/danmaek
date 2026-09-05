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
  { name: '원펀맨: 영웅의 길', slug: 'one-punch-road' },
  { name: '원신', slug: 'genshin-impact' },
  { name: '붕괴: 스타레일', slug: 'honkai-star-rail' },
  { name: '절지구원', slug: 'zenless-zone-zero' },
  { name: '명조: 웨이브', slug: 'wuthering-waves' },
  { name: '명일방주', slug: 'arknights' }
];

export type ToolSubcategory = { name: string; slug: string; categories: string[] };

export const TOOL_SUBCATEGORIES: ToolSubcategory[] = [
  { name: '금융·계산', slug: 'finance', categories: ['금융', '투자', '계산', '변환'] },
  { name: '건강·운동', slug: 'health', categories: ['건강', '운동'] },
  { name: '생활·요리', slug: 'daily-life', categories: ['생활', '요리'] },
  { name: 'IT·보안', slug: 'it-security', categories: ['IT', '보안'] },
  { name: '게임·랜덤', slug: 'games-random', categories: ['게임', '랜덤', '재미'] },
  { name: '이미지·오디오·영상', slug: 'media', categories: ['이미지', '오디오', '영상'] },
  { name: '생성·디자인', slug: 'create-design', categories: ['생성', '글쓰기', '창작', '디자인'] },
  { name: '취업·쇼핑·여행', slug: 'work-shopping-travel', categories: ['취업', '쇼핑', '여행', '학업'] }
];

export const categoryToPath: Record<string, string> = {
  뉴스: '/news/',
  가이드: '/guides/',
  쿠폰: '/coupons/',
  도구: '/tools/'
};
