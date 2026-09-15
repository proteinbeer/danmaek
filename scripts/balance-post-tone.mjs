import fs from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
const TARGET_JO_RATIO = 0.3;

function splitFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;
  return {
    full: match[0].trimEnd(),
    raw: match[1],
    body: source.slice(match[0].length)
  };
}

function isDraft(frontmatter) {
  return /^draft:\s*true\s*$/m.test(frontmatter);
}

function shouldSkipBlock(block) {
  const trimmed = block.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('```')) return true;
  if (trimmed.startsWith('##')) return true;
  if (trimmed.startsWith('|')) return true;
  if (trimmed.startsWith('<')) return true;
  if (trimmed.includes('COUPANG PARTNERS')) return true;
  if (trimmed.includes('<script') || trimmed.includes('</script>')) return true;
  if (trimmed.includes('<img') || trimmed.includes('</div>')) return true;
  if (/^[-*]\s/m.test(trimmed)) return true;
  if (/^\d+\.\s/m.test(trimmed)) return true;
  return false;
}

function convertEnding(sentence) {
  const rules = [
    [/수 있습니다([.!?])$/u, '수 있죠$1'],
    [/수 없습니다([.!?])$/u, '수 없죠$1'],
    [/해야 합니다([.!?])$/u, '해야 하죠$1'],
    [/필요합니다([.!?])$/u, '필요하죠$1'],
    [/중요합니다([.!?])$/u, '중요하죠$1'],
    [/안전합니다([.!?])$/u, '안전하죠$1'],
    [/가능합니다([.!?])$/u, '가능하죠$1'],
    [/어렵습니다([.!?])$/u, '어렵죠$1'],
    [/쉽습니다([.!?])$/u, '쉽죠$1'],
    [/좋습니다([.!?])$/u, '좋죠$1'],
    [/많습니다([.!?])$/u, '많죠$1'],
    [/높습니다([.!?])$/u, '높죠$1'],
    [/낮습니다([.!?])$/u, '낮죠$1'],
    [/큽니다([.!?])$/u, '크죠$1'],
    [/작습니다([.!?])$/u, '작죠$1'],
    [/빠릅니다([.!?])$/u, '빠르죠$1'],
    [/느립니다([.!?])$/u, '느리죠$1'],
    [/다릅니다([.!?])$/u, '다르죠$1'],
    [/나옵니다([.!?])$/u, '나오죠$1'],
    [/보입니다([.!?])$/u, '보이죠$1'],
    [/아닙니다([.!?])$/u, '아니죠$1'],
    [/것입니다([.!?])$/u, '것이죠$1'],
    [/점입니다([.!?])$/u, '점이죠$1'],
    [/때문입니다([.!?])$/u, '때문이죠$1'],
    [/입니다([.!?])$/u, '이죠$1'],
    [/했습니다([.!?])$/u, '했죠$1'],
    [/됐습니다([.!?])$/u, '됐죠$1'],
    [/되었습니다([.!?])$/u, '되었죠$1'],
    [/됩니다([.!?])$/u, '되죠$1'],
    [/있습니다([.!?])$/u, '있죠$1'],
    [/없습니다([.!?])$/u, '없죠$1'],
    [/같습니다([.!?])$/u, '같죠$1'],
    [/합니다([.!?])$/u, '하죠$1']
  ];

  for (const [pattern, replacement] of rules) {
    if (pattern.test(sentence)) return sentence.replace(pattern, replacement);
  }
  return sentence;
}

function countTone(body) {
  const blocks = body.split(/(\n{2,})/);
  let total = 0;
  let jo = 0;

  for (const block of blocks) {
    if (block.startsWith('\n') || shouldSkipBlock(block)) continue;
    const sentences = block.match(/[^.!?]+[.!?]/gu) || [];
    for (const sentence of sentences) {
      if (/(죠|하죠|이죠|되죠|했죠|됐죠|있죠|없죠|같죠|보이죠|아니죠)[.!?]$/u.test(sentence.trim())) {
        total += 1;
        jo += 1;
      } else if (/(합니다|했습니다|됩니다|되었습니다|됐습니다|입니다|습니다|있습니다|없습니다|같습니다|보입니다|아닙니다)[.!?]$/u.test(sentence.trim())) {
        total += 1;
      }
    }
  }

  return { total, jo, ratio: total ? jo / total : 0 };
}

function balanceBody(body) {
  const blocks = body.split(/(\n{2,})/);
  const candidates = [];
  const before = countTone(body);
  const targetJo = Math.round(before.total * TARGET_JO_RATIO);
  const needed = Math.max(0, targetJo - before.jo);
  if (needed === 0) return { body, before, after: before, conversions: 0 };

  blocks.forEach((block, blockIndex) => {
    if (block.startsWith('\n') || shouldSkipBlock(block)) return;
    const sentenceRe = /[^.!?]+[.!?]/gu;
    let match;
    while ((match = sentenceRe.exec(block)) !== null) {
      const sentence = match[0];
      const trimmed = sentence.trim();
      if (/(죠|하죠|이죠|되죠|했죠|됐죠|있죠|없죠|같죠|보이죠|아니죠)[.!?]$/u.test(trimmed)) continue;
      const converted = convertEnding(sentence);
      if (converted !== sentence) {
        candidates.push({
          blockIndex,
          start: match.index,
          end: match.index + sentence.length,
          converted
        });
      }
    }
  });

  const conversions = Math.min(needed, candidates.length);
  if (conversions === 0) return { body, before, after: before, conversions: 0 };

  const selected = new Set();
  for (let i = 0; i < conversions; i += 1) {
    const index = Math.min(candidates.length - 1, Math.floor((i + 0.5) * candidates.length / conversions));
    selected.add(index);
  }

  const byBlock = new Map();
  [...selected].forEach((candidateIndex) => {
    const candidate = candidates[candidateIndex];
    if (!byBlock.has(candidate.blockIndex)) byBlock.set(candidate.blockIndex, []);
    byBlock.get(candidate.blockIndex).push(candidate);
  });

  for (const [blockIndex, replacements] of byBlock.entries()) {
    replacements.sort((a, b) => b.start - a.start);
    let block = blocks[blockIndex];
    for (const replacement of replacements) {
      block = `${block.slice(0, replacement.start)}${replacement.converted}${block.slice(replacement.end)}`;
    }
    blocks[blockIndex] = block;
  }

  const nextBody = blocks.join('');
  return {
    body: nextBody,
    before,
    after: countTone(nextBody),
    conversions: selected.size
  };
}

const changed = [];
let publicPosts = 0;
let conversionsTotal = 0;

for (const file of fs.readdirSync(postsDir).filter((name) => name.endsWith('.md'))) {
  const filePath = path.join(postsDir, file);
  const source = fs.readFileSync(filePath, 'utf8');
  const split = splitFrontmatter(source);
  if (!split || isDraft(split.raw)) continue;
  publicPosts += 1;

  const result = balanceBody(split.body);
  if (result.conversions === 0 || result.body === split.body) continue;

  fs.writeFileSync(filePath, `${split.full}\n\n${result.body.trim()}\n`, 'utf8');
  conversionsTotal += result.conversions;
  changed.push({
    file,
    conversions: result.conversions,
    before: Number(result.before.ratio.toFixed(3)),
    after: Number(result.after.ratio.toFixed(3))
  });
}

console.log(JSON.stringify({
  publicPosts,
  changedPosts: changed.length,
  conversions: conversionsTotal,
  sample: changed.slice(0, 20)
}, null, 2));
