import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const cleanSentence = (value) => value
  .replace(/\s+/g, ' ')
  .replace(/["“”]/g, '')
  .trim();

const splitSentences = (value) => cleanSentence(value)
  .split(/(?<=[.!?。！？]|다\.|죠\.|습니다\.|했습니다\.)\s+/u)
  .map((sentence) => sentence.trim())
  .filter(Boolean);

const readFrontmatterValue = (frontmatter, key) => {
  const quoted = frontmatter.match(new RegExp(`^${key}:\\s*"([^"]*)"`, 'm'));
  if (quoted) return quoted[1].trim();
  const plain = frontmatter.match(new RegExp(`^${key}:\\s*([^\\n]+)`, 'm'));
  return plain ? plain[1].replace(/^['"]|['"]$/g, '').trim() : '';
};

const makeOpinionSentence = ({ title, description, subcategory }) => {
  const text = `${title} ${description}`;

  if (/보안|유출|침해|취약|피싱|해킹|랜섬|패스키|비밀번호|프라이버시/.test(text)) {
    return '그런데 피해 규모보다 어떤 정보가 새어 나갔고 이후 어떤 연락을 조심해야 하는지가 더 중요해 보이죠.';
  }
  if (/AI|인공지능|OpenAI|Gemini|Anthropic|챗GPT|모델|데이터센터|반도체|칩/.test(text)) {
    return '결국 중요한 건 기술 이름보다 비용, 서비스 방식, 이용 선택지가 실제로 어떻게 달라지는지이죠.';
  }
  if (/업데이트|패치|버전|펌웨어|지원|기능|설정/.test(text)) {
    return '단순한 변경 목록보다 실제로 켜야 할 기능과 체감되는 차이를 먼저 보는 편이 좋죠.';
  }
  if (/출시|공개|발표|예약|일정|트레일러|쇼케이스|라인업/.test(text)) {
    return '관건은 발표 자체보다 출시 일정, 가격, 기다릴 이유가 얼마나 분명한지이죠.';
  }
  if (/매출|실적|주가|투자|IPO|인수|계약|수익|시장/.test(text)) {
    return '숫자보다 그 뒤에 깔린 기대감과 시장이 실제로 평가하는 지점이 더 중요하죠.';
  }
  if (/게임|스팀|콘솔|닌텐도|플레이|캐릭터|DLC|확장팩|서버/.test(text) || subcategory === '게임') {
    return '게임 뉴스는 발표 내용보다 플레이어가 무엇을 얻고 무엇을 더 기다려야 하는지가 핵심이죠.';
  }
  return '겉으로는 작은 변화처럼 보여도 실제 영향은 이후 흐름을 함께 봐야 분명해지죠.';
};

const makeDanPoint = ({ title, description, subcategory }) => {
  const sourceSentences = splitSentences(description || title);
  const first = sourceSentences[0] || cleanSentence(title);
  const second = sourceSentences[1] || cleanSentence(title);
  const third = makeOpinionSentence({ title, description, subcategory });

  return `<div class="dan-point">
  <strong>단 포인트</strong>
  <p>${escapeHtml(first)} ${escapeHtml(second)} ${escapeHtml(third)}</p>
</div>`;
};

const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));
const changed = [];
let skippedNonNews = 0;
let inserted = 0;
let replaced = 0;

for (const file of files) {
  const fullPath = path.join(postsDir, file);
  const source = fs.readFileSync(fullPath, 'utf8');
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!frontmatterMatch) continue;

  const frontmatter = frontmatterMatch[1];
  const category = readFrontmatterValue(frontmatter, 'category');
  if (category !== '뉴스') {
    skippedNonNews += 1;
    continue;
  }
  const title = readFrontmatterValue(frontmatter, 'title');
  const description = readFrontmatterValue(frontmatter, 'description');
  const subcategory = readFrontmatterValue(frontmatter, 'subcategory');
  const insert = makeDanPoint({ title, description, subcategory });
  let next = source;
  if (source.includes('<div class="dan-point">')) {
    next = source.replace(/\n?<div class="dan-point">\r?\n[\s\S]*?\r?\n<\/div>\r?\n*/u, `\n${insert}\n\n`);
    replaced += 1;
  } else {
    next = source.replace(frontmatterMatch[0], `${frontmatterMatch[0]}\n${insert}\n\n`);
    inserted += 1;
  }
  fs.writeFileSync(fullPath, next, 'utf8');
  changed.push(file);
}

console.log(JSON.stringify({
  changed: changed.length,
  inserted,
  replaced,
  skippedNonNews,
  files: changed,
}, null, 2));
