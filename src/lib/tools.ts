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
    | 'youtube-revenue'
    | 'pyeong'
    | 'utility'
    | 'delivery-split'
    | 'net-salary'
    | 'property-fees'
| 'retirement-pay'
      | 'leave-days'
      | 'savings-interest'
      | 'jeonse-rent'
      | 'ltv-dti'
      | 'subscription-score'
      | 'one-rep-max'
      | 'pet-age'
      | 'stats'
      | 'percentile'
      | 'unemployment'
      | 'salary-convert'
      | 'dday'
      | 'water'
      | 'paint'
      | 'travel-split'
      | 'property-tax'
      | 'installment'
      | 'activity-calorie'
      | 'heart-rate'
      | 'zodiac'
      | 'name-score'
      | 'work-hours'
      | 'appliance'
      | 'oven-temp'
      | 'dividend'
      | 'lotto'
      | 'heat-index'
      | 'weekly-allowance'
      | 'cbm'
      | 'ev-charging'
      | 'capital-gains'
      | 'macro'
      | 'customs-duty'
      | 'regex-tester'
      | 'json-format'
      | 'anniversary'
      | 'lang-switch'
      | 'measure'
      | 'car-tax'
      | 'text-base64'
      | 'gacha-cost'
      | 'sleep'
      | 'book-read'
      | 'json-csv'
      | 'sha-hash'
      | 'steps-kcal'
      | 'weight-goal'
      | 'romanize';
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
  { slug: 'image-to-base64', title: '이미지→Base64 변환기', description: '이미지 파일을 Base64 문자열로 변환합니다', category: '이미지', icon: '🖼️', type: 'image-base64' },
  { slug: 'base64-to-image', title: 'Base64 이미지 확인기', description: 'Base64 문자열을 이미지로 미리 보고 저장합니다', category: '이미지', icon: '🖼️', type: 'base64-image' },
  { slug: 'jpg-to-png-converter', title: 'JPG→PNG 변환기', description: 'JPG 이미지를 PNG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'png-to-jpg-converter', title: 'PNG→JPG 변환기', description: 'PNG 이미지를 JPG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'webp-converter', title: 'WebP 변환기', description: '이미지를 용량이 작은 WebP 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
  { slug: 'webp-to-png-converter', title: 'WebP→PNG 변환기', description: 'WebP 이미지를 PNG 파일로 변환합니다', category: '이미지', icon: '🖼️', type: 'file-tool' },
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
  { slug: 'mp3-to-wav-converter', title: 'MP3→WAV 변환기', description: 'MP3 오디오 파일을 WAV로 변환합니다', category: '오디오', icon: '🎧', type: 'file-tool' },
  { slug: 'wav-to-mp3-converter', title: 'WAV→MP3 변환기', description: 'WAV 오디오 파일을 MP3로 변환합니다', category: '오디오', icon: '🎧', type: 'file-tool' },
  { slug: 'mp4-webm-converter', title: 'MP4→WebM 변환기', description: 'MP4 영상을 WebM 형식으로 변환합니다', category: '영상', icon: '🎬', type: 'file-tool' },
  { slug: 'video-to-gif-converter', title: '영상→GIF 변환기', description: '영상의 짧은 구간을 GIF로 변환합니다', category: '영상', icon: '🎞️', type: 'file-tool' },
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
  { slug: 'pyeong-calculator', title: '평수 계산기', description: '가로·세로 길이로 면적을 제곱미터와 평수로 계산합니다', category: '생활', icon: '🏠', type: 'pyeong' },
  { slug: 'utility-bill-calculator', title: '전기·가스 요금 계산기', description: '전력량(kWh)이나 가스 사용량(m³)으로 예상 요금을 추정합니다', category: '생활', icon: '💡', type: 'utility' },
  { slug: 'delivery-fee-split', title: '배달비 분담 계산기', description: '주문 금액과 배달비를 인원수로 나눠 1인당 금액을 계산합니다', category: '생활', icon: '🛵', type: 'delivery-split' },
  { slug: 'net-salary-calculator', title: '월급 실수령액 계산기', description: '세전 월급에서 4대 보험과 소득세를 뺀 실수령액을 계산합니다', category: '금융', icon: '💰', type: 'net-salary' },
  { slug: 'property-purchase-fees', title: '취득세·등기비 계산기', description: '매매가로 취득세, 지방교육세, 등기비용을 추정합니다', category: '금융', icon: '🏢', type: 'property-fees' },
  { slug: 'retirement-pay-calculator', title: '퇴직금 계산기', description: '입사일, 퇴사일, 평균임금으로 퇴직금을 계산합니다', category: '금융', icon: '🧾', type: 'retirement-pay' },
  { slug: 'annual-leave-days-calculator', title: '연차·근무일수 계산기', description: '입사일부터 오늘까지 근무일수와 발생 연차를 계산합니다', category: '생활', icon: '🗓️', type: 'leave-days' },
  { slug: 'installment-savings-calculator', title: '적금 이자 계산기', description: '월 납입액과 이율로 세후 적금 원리금을 계산합니다', category: '금융', icon: '🐷', type: 'savings-interest' },
  { slug: 'jeonse-monthly-rent-calculator', title: '전세→월세 전환 계산기', description: '보증금과 전환율로 전세를 월세로 전환한 금액을 계산합니다', category: '금융', icon: '🏠', type: 'jeonse-rent' },
  { slug: 'ltv-dti-calculator', title: 'LTV·DTI 계산기', description: '주택가격과 소득으로 LTV·DTI 기준 최대 대출금액을 추정합니다', category: '금융', icon: '🏦', type: 'ltv-dti' },
  { slug: 'subscription-score-calculator', title: '청약 가점 계산기', description: '무주택 기간, 부양가족 수, 통장 가입기간으로 청약 가점을 계산합니다', category: '금융', icon: '🎯', type: 'subscription-score' },
  { slug: 'one-rep-max-calculator', title: '1RM 계산기', description: '드는 횟수와 중량으로 최대 1회 들 수 있는 무게(1RM)를 추정합니다', category: '생활', icon: '🏋️', type: 'one-rep-max' },
  { slug: 'pet-age-calculator', title: '강아지·고양이 나이 계산기', description: '반려동물 나이를 사람 나이로 환산합니다', category: '생활', icon: '🐶', type: 'pet-age' },
  { slug: 'mean-stddev-calculator', title: '평균·표준편차 계산기', description: '숫자들을 입력해 평균, 중앙값, 표준편차를 계산합니다', category: '학업', icon: '📊', type: 'stats' },
  { slug: 'percentile-rank-calculator', title: '백분위·등수 계산기', description: '내 점수, 평균, 표준편차로 백분위와 예상 등수를 계산합니다', category: '학업', icon: '🏅', type: 'percentile' },
  { slug: 'unemployment-benefit-calculator', title: '실업급여 계산기', description: '고용보험 가입기간과 평균임금으로 실업급여를 추정합니다', category: '취업', icon: '🛟', type: 'unemployment' },
  { slug: 'hourly-salary-converter', title: '시급·월급·연봉 변환기', description: '시급과 근무시간으로 월급과 연봉을 환산합니다', category: '취업', icon: '💼', type: 'salary-convert' },
  { slug: 'dday-calculator', title: 'D-Day 계산기', description: '목표 날짜까지 남은 일수를 D-day로 계산합니다', category: '생활', icon: '⏳', type: 'dday' },
  { slug: 'water-intake-calculator', title: '하루 물 섭취 계산기', description: '체중과 활동량으로 하루 권장 물 섭취량을 계산합니다', category: '건강', icon: '💧', type: 'water' },
  { slug: 'paint-tile-calculator', title: '페인트·타일 계산기', description: '벽 면적으로 필요한 페인트와 타일 수량을 계산합니다', category: '생활', icon: '🎨', type: 'paint' },
  { slug: 'travel-expense-split', title: '여행 경비 분담 계산기', description: '공동 여행 비용을 인원수로 나눠 1인당 부담액을 계산합니다', category: '여행', icon: '✈️', type: 'travel-split' },
  { slug: 'property-tax-calculator', title: '재산세 계산기', description: '주택 공시가로 재산세와 지방교육세, 도시지역분을 추정합니다', category: '금융', icon: '🏡', type: 'property-tax' },
  { slug: 'card-installment-calculator', title: '카드 할부 수수료 계산기', description: '할부 금액과 수수료율로 월 납입액과 총 수수료를 계산합니다', category: '금융', icon: '💵', type: 'installment' },
  { slug: 'walking-running-calorie-calculator', title: '걷기·러닝 칼로리 계산기', description: '체중과 거리·속도로 걷기·러닝 소모 칼로리를 계산합니다', category: '건강', icon: '👟', type: 'activity-calorie' },
  { slug: 'heart-rate-zone-calculator', title: '목표 심박수 존 계산기', description: '나이로 최대심박수와 운동 강도별 목표 심박수를 계산합니다', category: '건강', icon: '❤️', type: 'heart-rate' },
  { slug: 'zodiac-sign-calculator', title: '별자리·띠 계산기', description: '생년월일로 별자리, 띠, 만 나이를 확인합니다', category: '재미', icon: '🌟', type: 'zodiac' },
  { slug: 'name-score-calculator', title: '이름 점수 계산기', description: '이름 글자 값을 더해 재미있는 이름 점수를 매깁니다', category: '재미', icon: '🔮', type: 'name-score' },
  { slug: 'work-hours-calculator', title: '근무 시간 계산기', description: '출근·퇴근·휴게시간으로 하루 근무시간을 계산합니다', category: '취업', icon: '🕘', type: 'work-hours' },
  { slug: 'appliance-power-cost-calculator', title: '가전 전기요금 계산기', description: '제품 소비전력과 사용시간으로 월 전기요금 기여액을 추정합니다', category: '생활', icon: '🔌', type: 'appliance' },
  { slug: 'oven-temperature-converter', title: '오븐 온도 변환기', description: '오븐 온도를 섭씨·화씨·가스마크로 변환합니다', category: '요리', icon: '🍳', type: 'oven-temp' },
  { slug: 'dividend-calculator', title: '배당금 계산기', description: '보유 주식과 주당 배당으로 연 배당금과 수익률을 계산합니다', category: '투자', icon: '🧧', type: 'dividend' },
  { slug: 'lotto-number-generator', title: '로또 번호 생성기', description: '1부터 원하는 범위에서 중복 없는 로또 번호를 추첨합니다', category: '랜덤', icon: '🎰', type: 'lotto' },
  { slug: 'heat-index-calculator', title: '체감온도·열지수 계산기', description: '기온과 습도로 열지수(체감온도)를 계산합니다', category: '생활', icon: '☀️', type: 'heat-index' },
  { slug: 'weekly-allowance-calculator', title: '주휴수당 계산기', description: '시급과 근무시간으로 주휴수당과 예상 월급을 계산합니다', category: '취업', icon: '⏰', type: 'weekly-allowance' },
  { slug: 'cbm-calculator', title: '부피·무게(CBM) 계산기', description: '박스 크기와 수량으로 CBM과 항공 부피무게를 계산합니다', category: '쇼핑', icon: '📦', type: 'cbm' },
  { slug: 'ev-charging-cost-calculator', title: '전기차 충전비 계산기', description: '배터리 용량과 전기 단가로 충전 비용을 추정합니다', category: '생활', icon: '🔋', type: 'ev-charging' },
  { slug: 'capital-gains-tax-calculator', title: '양도소득세 계산기', description: '주택을 팔 때 양도소득세와 실제 손에 남는 금액을 추정합니다', category: '금융', icon: '📑', type: 'capital-gains' },
  { slug: 'macro-nutrient-calculator', title: '탄단지 계산기', description: '기초대사량과 활동량으로 하루 탄수화물·단백질·지방 권장량을 계산합니다', category: '건강', icon: '🥗', type: 'macro' },
  { slug: 'customs-duty-calculator', title: '해외직구 관부가세 계산기', description: '상품가와 배송비로 관세와 부가세를 추정합니다', category: '쇼핑', icon: '📬', type: 'customs-duty' },
  { slug: 'regex-tester', title: '정규식 테스터', description: '패턴과 텍스트를 넣고 매치 결과를 바로 확인합니다', category: 'IT', icon: '🔍', type: 'regex-tester' },
  { slug: 'json-formatter', title: 'JSON 포맷터', description: 'JSON을 정렬하거나 축소하고 문법 오류를 확인합니다', category: 'IT', icon: '📋', type: 'json-format' },
  { slug: 'anniversary-calculator', title: '기념일 계산기', description: '기준 날짜로 100일, 1주년 같은 기념일을 계산합니다', category: '생활', icon: '💝', type: 'anniversary' },
  { slug: 'hangul-english-typo-converter', title: '한/영 오타 변환기', description: '영문 자판으로 친 한글 오타를 되돌리거나 반대로 변환합니다', category: '재미', icon: '🔤', type: 'lang-switch' },
  { slug: 'cooking-measure-converter', title: '요리 계량 변환기', description: '큰술·작은술·컵·ml를 재료별 그램으로 환산합니다', category: '요리', icon: '🥄', type: 'measure' },
  { slug: 'car-acquisition-tax-calculator', title: '차량 취·등록세 계산기', description: '차량 가격과 차급으로 취득세와 교육세를 추정합니다', category: '금융', icon: '🚗', type: 'car-tax' },
  { slug: 'text-base64-converter', title: '텍스트→Base64 변환기', description: 'UTF-8 텍스트를 Base64로 인코딩·디코딩합니다', category: 'IT', icon: '🔡', type: 'text-base64' },
  { slug: 'gacha-expected-cost-calculator', title: '가챠 기대 비용 계산기', description: '확률과 1회 비용으로 목표 달성에 필요한 시도 횟수를 추정합니다', category: '게임', icon: '💎', type: 'gacha-cost' },
  { slug: 'sleep-cycle-calculator', title: '수면 사이클 계산기', description: '기상 시간 기준 90분 주기로 권장 취침 시간을 계산합니다', category: '건강', icon: '😴', type: 'sleep' },
  { slug: 'book-finish-time-calculator', title: '독서 완독 시간 계산기', description: '쪽수와 읽기 속도로 완독 예상 시각을 계산합니다', category: '생활', icon: '📖', type: 'book-read' },
  { slug: 'json-csv-converter', title: 'JSON→CSV 변환기', description: 'JSON 배열을 CSV로, CSV를 JSON으로 변환합니다', category: 'IT', icon: '🔁', type: 'json-csv' },
  { slug: 'sha256-hash-generator', title: 'SHA-256 해시 생성기', description: 'SHA-1/256/384/512 해시를 브라우저에서 생성합니다', category: 'IT', icon: '🛡️', type: 'sha-hash' },
  { slug: 'steps-kcal-calculator', title: '걸음 칼로리 계산기', description: '걸음 수로 이동 거리와 소모 칼로리를 추정합니다', category: '건강', icon: '🚶', type: 'steps-kcal' },
  { slug: 'weight-loss-goal-calculator', title: '감량 목표일 계산기', description: '체중과 주간 감량 속도로 목표 달성 예상일을 계산합니다', category: '건강', icon: '⚖️', type: 'weight-goal' },
  { slug: 'hangul-romanizer', title: '한글 로마자 변환기', description: '한글 문장을 국어의 로마자 표기법으로 변환합니다', category: '재미', icon: '🆎', type: 'romanize' },
];
