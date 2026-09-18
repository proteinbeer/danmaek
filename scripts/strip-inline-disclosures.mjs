import fs from 'node:fs/promises';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
const files = (await fs.readdir(postsDir)).filter((f) => /\.mdx?$/.test(f));

const DISCLOSURE_LINE = '<p class="affiliate-disclosure">이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>';

let removed = 0;
for (const file of files) {
  const filePath = path.join(postsDir, file);
  const source = await fs.readFile(filePath, 'utf8');
  const lines = source.split(/\r?\n/);
  const out = [];
  let dropNextBlank = false;
  for (const line of lines) {
    if (line.trim() === DISCLOSURE_LINE) {
      removed += 1;
      dropNextBlank = true;
      continue;
    }
    if (dropNextBlank && line.trim() === '') {
      dropNextBlank = false;
      continue;
    }
    dropNextBlank = false;
    out.push(line);
  }
  if (out.length !== lines.length) {
    await fs.writeFile(filePath, out.join('\n'), 'utf8');
  }
}
console.log(`Removed ${removed} inline disclosure paragraph(s) across ${files.length} files.`);