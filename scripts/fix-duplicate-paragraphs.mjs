import fs from 'node:fs/promises';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
const files = (await fs.readdir(postsDir)).filter((f) => /\.mdx?$/.test(f));

const isMeaningful = (t) => t !== '' && !/^#{1,6}\s/.test(t) && !/^<[^>]+>$/.test(t);

let fixedFiles = 0;
let removedBlocks = 0;

for (const file of files) {
  const filePath = path.join(postsDir, file);
  const source = await fs.readFile(filePath, 'utf8');
  const lines = source.split(/\r?\n/);
  const out = [];
  let prevContent = null;
  let removed = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!isMeaningful(trimmed)) {
      out.push(line);
      continue;
    }
    if (trimmed === prevContent) {
      if (out.length && out[out.length - 1].trim() === '') out.pop();
      removed += 1;
      continue;
    }
    out.push(line);
    prevContent = trimmed;
  }

  if (removed > 0) {
    await fs.writeFile(filePath, out.join('\n'), 'utf8');
    fixedFiles += 1;
    removedBlocks += removed;
    console.log(`${file}: removed ${removed} duplicate paragraph(s)`);
  }
}

console.log(`\nFixed ${fixedFiles} files, removed ${removedBlocks} duplicate paragraphs total.`);