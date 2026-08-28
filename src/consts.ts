export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: '단맥은 IT, 게임, 도구를 빠르고 깊게 다루는 한국어 콘텐츠 사이트입니다.',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  { name: 'IT', slug: 'it', description: 'AI, 플랫폼, 기기, 테크 기업의 변화를 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/knowledge.gif' },
  { name: '게임', slug: 'games', description: '콘솔, PC, 모바일 게임과 플랫폼 전략을 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/game.gif' },
  { name: '도구', slug: 'tools', description: '계산기, 변환기, 제너레이터 등 바로 쓸 수 있는 온라인 도구 모음입니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' }
] as const;

export const categoryToPath: Record<string, string> = {
  IT: '/it/',
  게임: '/games/',
  도구: '/tools/'
};
