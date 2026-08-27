export const SITE = {
  name: '단맥',
  url: 'https://danmaek.com',
  title: '단맥',
  description: '단맥은 영화, 드라마, 게임, 지식을 뉴스보다 한 단계 더 깊게 읽는 한국어 도구 콘텐츠 사이트입니다.',
  locale: 'ko_KR',
  lang: 'ko-KR'
} as const;

export const CATEGORIES = [
  { name: '영화', slug: 'movies', description: '개봉작, 장르 영화, 흥행 흐름과 관객 반응을 읽습니다.', image: 'https://img.danmaek.com/src/assets/categories/movie.gif' },
  { name: '드라마', slug: 'dramas', description: '드라마 속 이야기, 캐릭터, 반응과 흐름을 차분하게 읽습니다.', image: 'https://img.danmaek.com/src/assets/categories/drama.gif' },
  { name: '게임', slug: 'games', description: '콘솔, PC, 모바일 게임과 플랫폼 전략을 쉽게 풀어봅니다.', image: 'https://img.danmaek.com/src/assets/categories/game.gif' },
  { name: '지식', slug: 'knowledge', description: '알아두면 좋은 배경지식과 궁금한 개념을 쉽게 정리합니다.', image: 'https://img.danmaek.com/src/assets/categories/knowledge.gif' },
  { name: '도구', slug: 'tools', description: '계산기, 변환기, 제너레이터 등 바로 쓸 수 있는 온라인 도구 모음입니다.', image: 'https://img.danmaek.com/src/assets/categories/tools.gif' }
] as const;

export const categoryToPath: Record<string, string> = {
  영화: '/movies/',
  드라마: '/dramas/',
  게임: '/games/',
  지식: '/knowledge/',
  도구: '/tools/'
};
