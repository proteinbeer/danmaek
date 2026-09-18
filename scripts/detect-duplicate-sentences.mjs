#!/usr/bin/env node
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = join(__dirname, '..', 'src', 'content', 'posts');
const SIMILAR_HEAD = 80;

const BLANK_LINE = /^\s*$/;
const HTML_LINE = /^</;
const SENTENCE_BOUNDARY = /(?<![0-9])[.!?。！？…](?=\s|$)/;

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function stripFrontmatter(lines) {
  const firstLine = (lines[0] ?? '').replace(/^\uFEFF/, '').trim();
  if (firstLine === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        return { body: lines.slice(i + 1), bodyStart: i + 1 };
      }
    }
  }
  return { body: lines, bodyStart: 0 };
}

function splitSentences(text) {
  return text
    .split(SENTENCE_BOUNDARY)
    .map((s) => normalize(s))
    .filter((s) => s.length >= 8 && !/^[*#\->0-9|]/.test(s));
}

function analyze(content, fileName) {
  const lines = content.split(/\r?\n/);
  const { body, bodyStart } = stripFrontmatter(lines);
  const issues = [];

  const entries = [];
  const paragraphs = [];
  let current = [];

  for (let i = 0; i < body.length; i++) {
    const trimmed = body[i].trim();
    const isContent = !BLANK_LINE.test(body[i]) && !HTML_LINE.test(trimmed) && trimmed !== '---';
    if (!isContent) {
      if (current.length) {
        paragraphs.push(current);
        current = [];
      }
      continue;
    }
    const entry = {
      line: bodyStart + i + 1,
      text: trimmed,
      norm: normalize(trimmed),
    };
    entries.push(entry);
    current.push(entry);
  }
  if (current.length) paragraphs.push(current);

  // --- 1) Consecutive duplicate / similar lines (blank lines ignored) ---
  for (let i = 0; i < entries.length; ) {
    const anchor = entries[i].norm;
    let k = i + 1;
    while (k < entries.length && entries[k].norm === anchor) k++;
    const run = k - i;
    if (run >= 2) {
      issues.push({
        kind: entries[i].text === entries[i + 1].text ? 'DUPLICATE_LINE' : 'DUPLICATE_LINE (whitespace-normalized)',
        lines: [entries[i].line, entries[k - 1].line],
        count: run,
        text: entries[i].text,
      });
    }
    i = k;
  }

  for (let i = 1; i < entries.length; i++) {
    const a = entries[i - 1];
    const b = entries[i];
    if (
      a.norm !== b.norm &&
      a.norm.length > SIMILAR_HEAD &&
      b.norm.length > SIMILAR_HEAD &&
      a.norm.slice(0, SIMILAR_HEAD) === b.norm.slice(0, SIMILAR_HEAD)
    ) {
      issues.push({
        kind: 'SIMILAR_LINE (first 80 chars match)',
        lines: [a.line, b.line],
        count: 2,
        text: a.text,
      });
    }
  }

  // --- 2) Sentence-level detection ---
  const paragraphSentences = paragraphs.map((p) => ({
    lines: [p[0].line, p[p.length - 1].line],
    full: normalize(p.map((e) => e.text).join(' ')),
    sents: splitSentences(p.map((e) => e.text).join(' ')),
  }));

  for (const ps of paragraphSentences) {
    for (let j = 1; j < ps.sents.length; j++) {
      if (ps.sents[j] === ps.sents[j - 1]) {
        issues.push({
          kind: 'DUPLICATE_SENTENCE (consecutive in paragraph)',
          lines: ps.lines,
          count: 2,
          text: ps.sents[j],
        });
      }
    }
  }

  for (let i = 1; i < paragraphSentences.length; i++) {
    const prev = paragraphSentences[i - 1];
    const next = paragraphSentences[i];
    if (prev.full === next.full) continue;
    if (prev.sents.length < 2 && next.sents.length < 2) continue;
    for (const a of prev.sents) {
      for (const b of next.sents) {
        if (a === b) {
          issues.push({
            kind: 'DUPLICATE_SENTENCE (adjacent paragraphs)',
            lines: [prev.lines[0], next.lines[0]],
            count: 2,
            text: a,
          });
        }
      }
    }
  }

  // --- Dedupe ---
  const seen = new Set();
  const unique = issues.filter((issue) => {
    const key = `${issue.kind}|${issue.lines.join('-')}|${issue.count}|${issue.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return { fileName, issues: unique };
}

function main() {
  const files = readdirSync(POSTS_DIR).filter((f) => f.toLowerCase().endsWith('.md')).sort();
  let filesWithIssues = 0;
  let totalIssues = 0;

  for (const fileName of files) {
    const filePath = join(POSTS_DIR, fileName);
    let content;
    try {
      content = readFileSync(filePath, 'utf8');
    } catch (err) {
      console.error(`ERROR reading ${fileName}: ${err.message}`);
      continue;
    }
    const { issues } = analyze(content, fileName);
    if (issues.length) {
      filesWithIssues++;
      totalIssues += issues.length;
      console.log(`\n=== ${fileName} ===`);
      issues.forEach((issue, idx) => {
        const lineLabel =
          issue.lines.length === 2 && issue.lines[0] === issue.lines[1]
            ? `line ${issue.lines[0]}`
            : `lines ${issue.lines.join('-')}`;
        const countLabel = issue.count > 2 ? ` (${issue.count} consecutive occurrences)` : '';
        console.log(`  ${idx + 1}. [${issue.kind}] ${lineLabel}${countLabel}`);
        console.log(`     "${issue.text}"`);
      });
    }
  }

  console.log(`\n===== SUMMARY =====`);
  console.log(`Files scanned: ${files.length}`);
  console.log(`Files with issues: ${filesWithIssues}`);
  console.log(`Total issues: ${totalIssues}`);
}

main();