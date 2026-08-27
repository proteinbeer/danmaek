import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { defineHastPlugin } from 'satteri';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const postsDir = path.join(rootDir, 'src', 'content', 'posts');

const externalLinksNewTab = defineHastPlugin({
  name: 'external-links-new-tab',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
        ctx.setProperty(node, 'target', '_blank');
        ctx.setProperty(node, 'rel', 'noopener noreferrer');
      }
    }
  }
});

const isSafeSlug = (slug) => /^[a-z0-9-]+$/i.test(slug);

const getPostPath = (slug) => {
  if (!isSafeSlug(slug)) return null;
  return path.join(postsDir, `${slug}.md`);
};

const getRequestBody = (req) => new Promise((resolve, reject) => {
  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1024 * 1024) {
      reject(new Error('Request body too large'));
      req.destroy();
    }
  });
  req.on('end', () => resolve(body));
  req.on('error', reject);
});

const getFrontmatterEnd = (lines) => {
  if (lines[0]?.replace(/^\uFEFF/, '').trim() !== '---') return -1;
  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index].trim() === '---') return index;
  }
  return -1;
};

const parseYamlString = (value) => {
  const trimmed = String(value ?? '').trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  }
  return trimmed;
};

const getFrontmatterTitle = (lines, frontmatterEnd) => {
  for (let index = 1; index < frontmatterEnd; index += 1) {
    const match = lines[index].match(/^title:\s*(.*)$/);
    if (match) return { index, title: parseYamlString(match[1]) };
  }
  return { index: -1, title: '' };
};

const getEditableLines = (raw) => {
  const lines = raw.split(/\r?\n/);
  const frontmatterEnd = getFrontmatterEnd(lines);
  const title = getFrontmatterTitle(lines, frontmatterEnd);

  const editable = [];
  let inHtmlBlock = false;
  for (let index = frontmatterEnd + 1; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (/(?:참고한 자료|이미지 출처)/i.test(trimmed)) {
      break;
    }

    if (inHtmlBlock) {
      if (/^<\/(p|div|script)>/i.test(trimmed) || /DYNAMIC BANNER END/i.test(trimmed)) {
        inHtmlBlock = false;
      }
      continue;
    }

    if (/^(<p\b|<div\b|<script\b|<!--|<img\b|<\/|<figure\b|<iframe\b)/i.test(trimmed)) {
      if (!/^<img\b/i.test(trimmed) && !/\/>|<\/(p|div|script|figure|iframe)>/i.test(trimmed)) {
        inHtmlBlock = true;
      }
      continue;
    }

    const headingMatch = line.match(/^(\s*#{1,6}\s+)(.*)$/);
    const inferredNumberHeading = !headingMatch && /^\d+\.\s+\S/.test(line);
    editable.push({
      index,
      text: headingMatch ? headingMatch[2] : line,
      prefix: headingMatch ? headingMatch[1] : inferredNumberHeading ? '## ' : ''
    });
  }
  return { lines, editable, title };
};

let silentSaveActive = false;

const localPostEditorPlugin = {
  name: 'danmaek-local-post-editor',
  handleHotUpdate({ file, server }) {
    if (silentSaveActive && file.includes('src/content/posts/')) {
      return [];
    }
  },
  configureServer(server) {
    server.middlewares.use('/__local-editor/post', async (req, res) => {
      try {
        const url = new URL(req.url || '/', 'http://localhost');
        const slug = url.searchParams.get('slug') || '';
        const postPath = getPostPath(slug);
        if (!postPath) {
          res.statusCode = 400;
          res.end(JSON.stringify({ ok: false, error: '잘못된 글 주소입니다.' }));
          return;
        }

        if (req.method === 'GET') {
          const raw = await fs.readFile(postPath, 'utf8');
          const { editable, title } = getEditableLines(raw);
          res.setHeader('content-type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: true, slug, title: title.title, lines: editable }));
          return;
        }

        if (req.method === 'POST') {
          const body = await getRequestBody(req);
          const payload = JSON.parse(body || '{}');
          const updates = Array.isArray(payload.lines) ? payload.lines : [];
          const raw = await fs.readFile(postPath, 'utf8');
          const { lines, editable, title } = getEditableLines(raw);
          const editableIndexes = new Set(editable.map((item) => item.index));
          const nextTitle = typeof payload.title === 'string' ? payload.title.trim() : '';
          const isSilent = url.searchParams.get('silent') === '1';

          if (nextTitle && title.index > -1) {
            lines[title.index] = `title: ${JSON.stringify(nextTitle)}`;
          }

          for (const item of updates) {
            const index = Number(item.index);
            if (!Number.isInteger(index) || !editableIndexes.has(index)) continue;
            const currentLine = lines[index] ?? '';
            const headingMatch = currentLine.match(/^(\s*#{1,6}\s+)(.*)$/);
            const prefix = String(item.prefix ?? '');
            const nextText = String(item.text ?? '').replace(/^\s*#{1,6}\s+/, '');
            const inferredNumberHeading = /^\d+\.\s+\S/.test(nextText);
            const nextPrefix = headingMatch ? headingMatch[1] : prefix || (inferredNumberHeading ? '## ' : '');
            lines[index] = nextPrefix ? `${nextPrefix}${nextText}` : nextText;
          }

          if (isSilent) {
            silentSaveActive = true;
            await fs.writeFile(postPath, lines.join('\n'), 'utf8');
            setTimeout(() => { silentSaveActive = false; }, 500);
          } else {
            await fs.writeFile(postPath, lines.join('\n'), 'utf8');
          }
          res.setHeader('content-type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: true }));
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ ok: false, error: '지원하지 않는 요청입니다.' }));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : '저장에 실패했습니다.' }));
      }
    });
  }
};

export default defineConfig({
  site: 'https://danmaek.com',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: satteri({
      hastPlugins: [externalLinksNewTab]
    })
  },
  vite: {
    plugins: [localPostEditorPlugin]
  },
  build: {
    format: 'directory'
  }
});
