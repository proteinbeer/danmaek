export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: 'IT, 게임, 도구',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  { name: 'IT', slug: 'it', description: 'AI, 플랫폼, 기기, 테크 기업의 변화를 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/knowledge.gif' },
  { name: '게임', slug: 'games', description: '콘솔, PC, 모바일 게임과 플랫폼 전략을 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/game.gif' },
  { name: '가이드', slug: 'guides', description: '구매, 환불, 설정 같은 실생활에 바로 써먹는 방법을 정리합니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' },
  { name: '도구', slug: 'tools', description: '계산기, 변환기, 제너레이터 등 바로 쓸 수 있는 온라인 도구 모음입니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' }
] as const;

export const categoryToPath: Record<string, string> = {
  IT: '/it/',
  게임: '/games/',
  가이드: '/guides/',
  도구: '/tools/'
};
