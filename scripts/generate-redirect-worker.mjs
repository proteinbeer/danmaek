import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const redirectsFile = path.join(root, 'src', 'lib', 'postRedirects.ts');
const outputFile = path.join(root, 'worker', 'redirect.js');

const source = await fs.readFile(redirectsFile, 'utf8');
const entries = [...source.matchAll(/^\s*'(.*?)'\s*:\s*'(.*?)',?\s*$/gm)];
const pairs = entries.map((match) => ({ from: match[1], to: match[2] }));

const faulty = pairs.filter((item) => !item.from || !item.to.startsWith('/posts/'));
if (faulty.length > 0) {
  console.error('잘못된 리다이렉트 엔트리:', faulty);
  process.exit(1);
}

const mapLines = pairs.map(({ from, to }) => `  '/posts/${from}': '${to}',`);

const worker = `/* eslint-disable */
/**
 * 단맥 통합 글 301 리다이렉트 Worker (Cloudflare Workers)
 *
 * 배포 방법: Cloudflare 대시보드 > Workers & Pages > 새 Worker 생성 후
 * 아래 스크립트를 붙여넣고, 라우트(Routes)에서 danmaek.com/* 을 이 Worker로 연결합니다.
 *
 * - 옛 통합 전 게임 URL (\`/posts/<옛slug>/\`) 요청 시 canonical 통합 글로 HTTP 301 응답.
 * - 그 외 모든 요청은 원본(GitHub Pages 등)으로 그대로 전달합니다.
 *
 * 이 파일은 \`npm run redirects:generate\` 로 src/lib/postRedirects.ts 에서 자동 생성됩니다.
 */

const REDIRECT_MAP = {
${mapLines.join('\n')}
};

const normalizePath = (pathname) => pathname.replace(/\\/+$/, '');

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);
    const target = REDIRECT_MAP[path];
    if (target) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: target,
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }
    return fetch(request);
  }
};
`;

await fs.mkdir(path.dirname(outputFile), { recursive: true });
await fs.writeFile(outputFile, worker, 'utf8');
console.log(`worker/redirect.js 생성 완료: ${pairs.length}건 리다이렉트`);