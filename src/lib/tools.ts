export type Tool = {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  type:
    | 'bmi'
    | 'age'
    | 'date-diff'
    | 'discount'
    | 'tip'
    | 'compound'
    | 'random'
    | 'counter'
    | 'storage'
    | 'color'
    | 'calorie'
    | 'fuel'
    | 'gpa'
    | 'loan'
    | 'mortgage'
    | 'percentage'
    | 'profit-loss'
    | 'sales-tax'
    | 'avg-cost'
    | 'time-duration'
    | 'angle'
    | 'area'
    | 'energy'
    | 'frequency'
    | 'speed'
    | 'volume'
    | 'power'
    | 'pressure'
    | 'unit'
    | 'number-base'
    | 'timestamp'
    | 'username'
    | 'uuid'
    | 'password'
    | 'random-team'
    | 'random-decision'
    | 'dice'
    | 'business-name'
    | 'fantasy-person'
    | 'fantasy-place'
    | 'time-zone'
    | 'currency'
    | 'pace'
    | 'file-tool'
    | 'text-tool'
    | 'simple-generator'
    | 'simple-game'
    | 'lunch-picker-full'
    | 'who-pays'
    | 'lorem'
    | 'image-base64'
    | 'base64-image'
    | 'youtube-revenue';
};

export const TOOLS: Tool[] = [
  { slug: 'bmi-calculator', title: 'BMI 계산기', description: '키와 몸무게를 입력해 BMI와 체중 범위를 바로 계산합니다', category: '건강', icon: '⚖️', type: 'bmi' },
  { slug: 'age-calculator', title: '만 나이 계산기', description: '생년월일을 기준으로 정확한 나이를 연, 월, 일 단위로 계산합니다', category: '생활', icon: '🎂', type: 'age' },
  { slug: 'date-difference-calculator', title: '날짜 차이 계산기', description: '두 날짜 사이의 일수와 기간 차이를 빠르게 확인합니다', category: '생활', icon: '📆', type: 'date-diff' },
  { slug: 'discount-calculator', title: '할인율 계산기', description: '정가와 할인율을 입력해 할인 금액과 최종 가격을 계산합니다', category: '쇼핑', icon: '🏷️', type: 'discount' },
  { slug: 'tip-calculator', title: '팁 계산기', description: '총액과 팁 비율을 넣어 1인당 부담 금액을 나눠 계산합니다', category: '여행', icon: '💸', type: 'tip' },
  { slug: 'compound-interest-calculator', title: '복리 계산기', description: '원금, 이율, 기간을 기준으로 복리 수익을 예상합니다', category: '금융', icon: '📈', type: 'compound' },
  { slug: 'random-number-generator', title: '랜덤 숫자 뽑기', description: '원하는 범위 안에서 무작위 숫자를 하나 뽑습니다', category: '랜덤', icon: '🎲', type: 'random' },
  { slug: 'character-byte-counter', title: '글자수 계산기', description: '입력한 글의 글자 수와 바이트 수를 바로 확인합니다', category: '글쓰기', icon: '✍️', type: 'counter' },
  { slug: 'data-storage-converter', title: '용량 단위 변환기', description: 'KB, MB, GB, TB 같은 데이터 용량 단위를 변환합니다', category: 'IT', icon: '💾', type: 'storage' },
  { slug: 'color-converter', title: '색상 코드 변환기', description: 'HEX, RGB, HSL 색상 코드를 서로 변환합니다', category: '디자인', icon: '🎨', type: 'color' },
  { slug: 'calorie-calculator', title: '칼로리 계산기', description: '기초대사량과 활동량을 바탕으로 하루 필요 칼로리를 계산합니다', category: '건강', icon: '🔥', type: 'calorie' },
  { slug: 'fuel-cost-calculator', title: '연료비 계산기', description: '거리, 연비, 유가를 입력해 예상 연료비를 계산합니다', category: '생활', icon: '⛽', type: 'fuel' },
  { slug: 'gpa-calculator', title: '학점 계산기', description: '과목별 평점과 이수학점을 입력해 평균 평점을 계산합니다', category: '학업', icon: '🎓', type: 'gpa' },
  { slug: 'loan-payment-calculator', title: '대출 상환 계산기', description: '대출 금액과 이율로 월 상환액과 총 이자를 계산합니다', category: '금융', icon: '🏦', type: 'loan' },
  { slug: 'mortgage-calculator', title: '주택담보대출 계산기', description: '주택담보대출의 월 납입액과 총 상환 금액을 예상합니다', category: '금융', icon: '🏠', type: 'mortgage' },
  { slug: 'percentage-calculator', title: '퍼센트 계산기', description: '비율, 증감률, 전체 대비 값을 퍼센트로 계산합니다', category: '계산', icon: '💯', type: 'percentage' },
  { slug: 'profit-loss-calculator', title: '손익 계산기', description: '매수가와 매도가를 기준으로 손익과 수익률을 계산합니다', category: '금융', icon: '📊', type: 'profit-loss' },
  { slug: 'sales-tax-calculator', title: '판매세 계산기', description: '가격과 세율을 입력해 세금과 최종 결제 금액을 계산합니다', category: '쇼핑', icon: '🧾', type: 'sales-tax' },
  { slug: 'stock-crypto-avg-cost-calculator', title: '주식·코인 평단가 계산기', description: '추가 매수 후 주식·코인 평균 단가와 총 투자금을 계산합니다', category: '투자', icon: '💹', type: 'avg-cost' },
  { slug: 'time-duration-calculator', title: '시간 차이 계산기', description: '시작 시간과 종료 시간 사이의 차이를 시간과 분으로 계산합니다', category: '생활', icon: '⏱️', type: 'time-duration' },
  { slug: 'angle-converter', title: '각도 변환기', description: '도, 라디안, 그라디안 등 각도 단위를 변환합니다', category: '변환', icon: '📐', type: 'angle' },
  { slug: 'area-converter', title: '면적 변환기', description: '제곱미터, 평, 에이커 등 면적 단위를 변환합니다', category: '변환', icon: '◼️', type: 'area' },
  { slug: 'energy-converter', title: '에너지 변환기', description: '줄, 칼로리, 와트시 등 에너지 단위를 변환합니다', category: '변환', icon: '🔋', type: 'energy' },
  { slug: 'frequency-converter', title: '주파수 변환기', description: 'Hz, kHz, MHz 등 주파수 단위를 변환합니다', category: '변환', icon: '〰️', type: 'frequency' },
  { slug: 'speed-converter', title: '속도 변환기', description: 'km/h, mph, m/s 등 속도 단위를 변환합니다', category: '변환', icon: '🚄', type: 'speed' },
  { slug: 'volume-converter', title: '부피 변환기', description: '리터, 밀리리터, 갤런, 컵 등 부피 단위를 변환합니다', category: '변환', icon: '🥤', type: 'volume' },
  { slug: 'power-converter', title: '전력 변환기', description: '와트, 킬로와트, 마력 등 전력 단위를 변환합니다', category: '변환', icon: '⚡', type: 'power' },
  { slug: 'pressure-converter', title: '압력 변환기', description: '파스칼, 바, PSI 등 압력 단위를 변환합니다', category: '변환', icon: '🌡️', type: 'pressure' },
  { slug: 'unit-converter', title: '길이·무게 변환기', description: '길이, 무게, 온도 같은 자주 쓰는 단위를 한 번에 변환합니다', category: '변환', icon: '📏', type: 'unit' },
  { slug: 'number-base-converter', title: '진수 변환기', description: '2진수, 10진수, 16진수 값을 서로 변환합니다', category: 'IT', icon: '🔢', type: 'number-base' },
  { slug: 'timestamp-converter', title: '타임스탬프 변환기', description: '날짜와 유닉스 타임스탬프를 실시간으로 변환합니다', category: 'IT', icon: '🕒', type: 'timestamp' },
  { slug: 'time-zone-converter', title: '시간대 변환기', description: '시간을 여러 UTC 기준 시간대로 바꿔 확인합니다', category: '생활', icon: '🌐', type: 'time-zone' },
  { slug: 'username-generator', title: '아이디 생성기', description: '게임, 앱, 프로필에 쓸 아이디 후보를 생성합니다', category: '생성', icon: '👤', type: 'username' },
  { slug: 'uuid-generator', title: 'UUID 생성기', description: '테스트와 개발에 사용할 UUID를 브라우저에서 생성합니다', category: 'IT', icon: '🆔', type: 'uuid' },
  { slug: 'password-generator', title: '비밀번호 생성기', description: '조건에 맞는 랜덤 비밀번호를 브라우저에서 생성합니다', category: '보안', icon: '🔐', type: 'password' },
  { slug: 'random-team-picker', title: '랜덤 팀 나누기', description: '이름 목록을 무작위 팀으로 나눕니다', category: '랜덤', icon: '👥', type: 'random-team' },
  { slug: 'random-decision-tools', title: '랜덤 결정 도구', description: '동전 던지기, 주사위, 선택지 뽑기로 결정을 도와줍니다', category: '랜덤', icon: '🎯', type: 'random-decision' },
  { slug: 'rpg-dice-roller', title: '주사위 굴리기', description: 'TRPG용 주사위를 개수와 보정값까지 넣어 굴립니다', category: '게임', icon: '🎲', type: 'dice' },
  { slug: 'business-name-generator', title: '브랜드 이름 생성기', description: '브랜드나 프로젝트에 어울리는 이름 후보를 생성합니다', category: '생성', icon: '🏷️', type: 'business-name' },
  { slug: 'fantasy-person-name-generator', title: '판타지 인물 이름 생성기', description: '판타지 세계관에 어울리는 인물 이름을 생성합니다', category: '생성', icon: '🧙', type: 'fantasy-person' },
  { slug: 'fantasy-place-name-generator', title: '판타지 지명 생성기', description: '왕국, 도시, 성 등 판타지 지명을 생성합니다', category: '생성', icon: '🏰', type: 'fantasy-place' },
  { slug: 'currency-converter', title: '환율 계산기', description: '금액을 입력해 주요 통화 기준으로 환산합니다', category: '금융', icon: '💱', type: 'currency' },
  { slug: 'pace-converter', title: '페이스 변환기', description: '러닝 페이스와 속도 단위를 서로 변환합니다', category: '운동', icon: '🏃', type: 'pace' },
  { slug: 'lorem-ipsum-generator', title: '더미 텍스트 생성기', description: '레이아웃 확인용 더미 텍스트를 빠르게 생성합니다', category: '글쓰기', icon: '📝', type: 'lorem' },
  { slug: 'image-to-base64', title: '이미지 Base64 변환기', description: '이미지 파일을 Base64 문자열로 변환합니다', category: '이미지', icon: '🖼️', type: 'image-base64' },
  { slug: 'base64-to-image', title: 'Base64 이미지 확인기', description: 'Base64 문자열을 이미지로 미리 보고 저장합니다', category: '이미지', icon: '🖼️', type: 'base64-image' },
  { slug: 'jpg-to-png-converter', title: 'JPG PNG 변환기', description: 'JPG 이미지를 PNG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'png-to-jpg-converter', title: 'PNG JPG 변환기', description: 'PNG 이미지를 JPG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'webp-converter', title: 'WebP 변환기', description: '이미지를 용량이 작은 WebP 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'webp-to-png-converter', title: 'WebP PNG 변환기', description: 'WebP 이미지를 PNG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'image-compressor', title: '이미지 압축기', description: '이미지 파일 용량을 줄이고 결과를 다운로드합니다', category: '이미지', icon: '🗜️', type: 'file-tool' },
  { slug: 'image-resizer', title: '이미지 크기 조절기', description: '이미지의 가로세로 크기를 원하는 값으로 조절합니다', category: '이미지', icon: '📐', type: 'file-tool' },
  { slug: 'image-cropper', title: '이미지 자르기', description: '이미지에서 필요한 영역만 잘라 저장합니다', category: '이미지', icon: '✂️', type: 'file-tool' },
  { slug: 'image-filter-tool', title: '이미지 필터 도구', description: '흑백, 세피아, 밝기, 대비 같은 필터를 적용합니다', category: '이미지', icon: '🎚️', type: 'file-tool' },
  { slug: 'image-color-picker', title: '이미지 색상 추출기', description: '이미지에서 주요 색상과 색상 코드를 추출합니다', category: '이미지', icon: '🎨', type: 'file-tool' },
  { slug: 'image-metadata-viewer', title: '이미지 메타데이터 보기', description: '이미지 파일의 크기, 형식, 메타데이터를 확인합니다', category: '이미지', icon: 'ℹ️', type: 'file-tool' },
  { slug: 'color-converter-picker', title: '색상 선택기', description: '색상을 고르고 HEX, RGB, HSL 값을 확인합니다', category: '디자인', icon: '🎨', type: 'color' },
  { slug: 'rotate-flip-image', title: '이미지 회전·반전', description: '이미지를 회전하거나 좌우·상하 반전합니다', category: '이미지', icon: '🔄', type: 'file-tool' },
  { slug: 'audio-metadata-viewer', title: '오디오 정보 보기', description: '오디오 파일의 길이, 용량, 형식 정보를 확인합니다', category: '오디오', icon: '🎧', type: 'file-tool' },
  { slug: 'audio-trimmer', title: '오디오 자르기', description: '오디오 파일에서 필요한 구간만 잘라 저장합니다', category: '오디오', icon: '✂️', type: 'file-tool' },
  { slug: 'audio-reverser', title: '오디오 뒤집기', description: 'MP3 또는 WAV 오디오를 뒤집어 저장합니다', category: '오디오', icon: '🔁', type: 'file-tool' },
  { slug: 'audio-speed-changer', title: '오디오 속도 변경', description: '오디오 재생 속도를 바꿔 WAV 파일로 저장합니다', category: '오디오', icon: '⏩', type: 'file-tool' },
  { slug: 'audio-volume-booster', title: '오디오 볼륨 증폭', description: '오디오 볼륨을 키우거나 줄여 저장합니다', category: '오디오', icon: '🔊', type: 'file-tool' },
  { slug: 'silent-audio-generator', title: '무음 오디오 생성기', description: '편집과 테스트에 쓸 무음 WAV 파일을 생성합니다', category: '오디오', icon: '🔇', type: 'text-tool' },
  { slug: 'mp3-to-wav-converter', title: 'MP3 WAV 변환기', description: 'MP3 오디오 파일을 WAV로 변환합니다', category: '오디오', icon: '🎧', type: 'file-tool' },
  { slug: 'wav-to-mp3-converter', title: 'WAV MP3 변환기', description: 'WAV 오디오 파일을 MP3로 변환합니다', category: '오디오', icon: '🎧', type: 'file-tool' },
  { slug: 'mp4-webm-converter', title: 'MP4 WebM 변환기', description: 'MP4 영상을 WebM 형식으로 변환합니다', category: '영상', icon: '🎬', type: 'file-tool' },
  { slug: 'video-to-gif-converter', title: '영상 GIF 변환기', description: '영상의 짧은 구간을 GIF로 변환합니다', category: '영상', icon: '🎞️', type: 'file-tool' },
  { slug: 'video-compressor', title: '영상 압축기', description: '영상 파일 용량을 줄이고 MP4로 저장합니다', category: '영상', icon: '🗜️', type: 'file-tool' },
  { slug: 'video-trimmer', title: '영상 자르기', description: '영상에서 시작과 끝 시간을 지정해 잘라냅니다', category: '영상', icon: '✂️', type: 'file-tool' },
  { slug: 'video-audio-extractor', title: '영상 오디오 추출기', description: '영상 파일에서 오디오만 추출해 저장합니다', category: '영상', icon: '🎙️', type: 'file-tool' },
  { slug: 'subtitle-converter', title: '자막 변환기', description: 'SRT와 WebVTT 자막 파일 형식을 서로 변환합니다', category: '영상', icon: '💬', type: 'text-tool' },
  { slug: 'sprite-sheet-editor', title: '스프라이트 시트 편집기', description: '스프라이트 프레임을 정렬하고 애니메이션을 미리 봅니다', category: '게임', icon: '🧩', type: 'file-tool' },
  { slug: 'fantasy-quest-generator', title: '판타지 퀘스트 생성기', description: '판타지 이야기나 게임에 쓸 퀘스트 아이디어를 생성합니다', category: '생성', icon: '📜', type: 'simple-generator' },
  { slug: 'sci-fi-person-name-generator', title: 'SF 인물 이름 생성기', description: 'SF 세계관에 어울리는 인물 이름을 생성합니다', category: '생성', icon: '🚀', type: 'simple-generator' },
  { slug: 'sci-fi-place-name-generator', title: 'SF 지명 생성기', description: '행성, 기지, 우주선 같은 SF 지명을 생성합니다', category: '생성', icon: '🪐', type: 'simple-generator' },
  { slug: 'game-loot-generator', title: '게임 아이템 생성기', description: '게임 아이템과 보상 아이디어를 생성합니다', category: '게임', icon: '💎', type: 'simple-game' },
  { slug: 'loot-box-simulator', title: '아이템 박스 시뮬레이터', description: '확률에 따라 아이템 박스 결과를 시뮬레이션합니다', category: '게임', icon: '📦', type: 'simple-game' },
  { slug: 'gacha-summon-simulator', title: '가챠 시뮬레이터', description: '가챠 소환 결과를 확률 기반으로 시뮬레이션합니다', category: '게임', icon: '✨', type: 'simple-game' },
  { slug: 'rpg-character-generator', title: 'RPG 캐릭터 생성기', description: '성격, 배경, 약점까지 포함한 RPG 캐릭터를 생성합니다', category: '게임', icon: '🛡️', type: 'simple-generator' },

  { slug: 'tournament-bracket-generator', title: '토너먼트 대진표 생성기', description: '참가자 목록으로 토너먼트 1라운드 대진을 만듭니다', category: '게임', icon: '🏆', type: 'random-team' },
  { slug: 'who-pays-roulette', title: '누가 낼까 룰렛', description: '이름을 넣고 룰렛을 돌려 누가 낼지 정합니다', category: '랜덤', icon: '🍻', type: 'who-pays' },
  { slug: 'lunch-picker', title: '점심 메뉴 추천기', description: '오늘 점심으로 먹을 메뉴를 무작위로 추천합니다', category: '랜덤', icon: '🍜', type: 'lunch-picker-full' },
  { slug: 'youtube-revenue-calculator', title: '유튜브 수익 계산기', description: '조회수와 RPM으로 유튜브 예상 광고 수익을 계산합니다', category: '창작', icon: '📺', type: 'youtube-revenue' },
];
