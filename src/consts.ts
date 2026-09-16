export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: 'IT, 게임',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  { name: 'IT', slug: 'it', description: '윈도우, PC·하드웨어, 네트워크, 주변기기 등 실생활에 바로 써먹는 IT 방법을 정리합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '게임', slug: 'games', description: '스팀, 콘솔, 모바일 게임의 공략과 설정을 쉽게 정리합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '쿠폰', slug: 'coupons', description: '모바일 게임 프로모 코드를 매일 정리해 공유합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '도구', slug: 'tools', description: '계산기, 변환기, 제너레이터 등 바로 쓸 수 있는 온라인 도구 모음입니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' }
] as const;

export type Subcategory = { name: string; slug: string };

export const IT_SUBCATEGORIES: Subcategory[] = [
  { name: '윈도우 11', slug: 'windows-11' },
  { name: 'PC·하드웨어', slug: 'pc-hardware' },
  { name: '네트워크', slug: 'network' },
  { name: '주변기기', slug: 'peripherals' }
];

export const GAME_SUBCATEGORIES: Subcategory[] = [
  { name: '스팀', slug: 'steam' },
  { name: '플스', slug: 'ps' },
  { name: '스위치', slug: 'switch' },
  { name: '메이플 키우기', slug: 'maple-raising' },
  { name: '랜덤 다이스 2', slug: 'random-dice-2' },
  { name: '뮤제닉스', slug: 'mewgenics' },
  { name: '더 블러드 오브 던워커', slug: 'dawnwalker' },
  { name: '귀무자', slug: 'onimusha' },
  { name: '발하임', slug: 'valheim' },
  { name: '스타워즈 제로 컴퍼니', slug: 'star-wars-zero-company' },
  { name: '워독스', slug: 'wardogs' },
  { name: '프라그마타', slug: 'pragmata' },
  { name: '낚시 방법', slug: 'how-to-fish' },
  { name: '봄바나나', slug: 'bombanana' },
  { name: '모탈 셸 2', slug: 'mortal-shell-2' },
  { name: '할로윈 더 게임', slug: 'halloween-the-game' },
  { name: '몬스터헌터 와일즈', slug: 'monster-hunter-wilds' }
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
  { name: '젠레스 존 제로', slug: 'zenless-zone-zero' },
  { name: '명조: 웨이브', slug: 'wuthering-waves' },
  { name: '명일방주', slug: 'arknights' },
  { name: '이환', slug: 'neverness-to-everness' },
  { name: '드래곤볼 레전즈', slug: 'dragon-ball-legends' },
  { name: '원스휴먼', slug: 'once-human' },
  { name: '퍼니싱: 그레이 레이븐', slug: 'punishing-gray-raven' },
  { name: '붕괴3rd', slug: 'honkai-impact-3rd' },
  { name: '승리의 여신: 니케', slug: 'nikke' },
  { name: '소녀전선2: 망명', slug: 'girls-frontline-2' },
  { name: '마비노기 모바일', slug: 'mabinogi-mobile' },
  { name: '리버스: 1999', slug: 'reverse-1999' },
  { name: '쿠키런: 모험의 탑', slug: 'cookie-run-toa' },
  { name: '에이지 오브 엠파이어 모바일', slug: 'age-of-empires-mobile' },
  { name: '로드모바일: 트랜스포머', slug: 'lords-mobile-transformers' },
  { name: '일곱 개의 대죄: 오리진', slug: 'seven-deadly-sins-origin' },
  { name: 'I9: 인페르노 나인', slug: 'i9-inferno-nine' },
  { name: '운빨존많겜', slug: 'lucky-defense' },
  { name: '레이드: 그림자의 전설', slug: 'raid-shadow-legends' }
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
  IT: '/it/',
  게임: '/games/',
  쿠폰: '/coupons/',
  도구: '/tools/'
};
