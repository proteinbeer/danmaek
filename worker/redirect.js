/* eslint-disable */
/**
 * 단맥 Cloudflare Worker (pass-through)
 *
 * 2026-09-18 지시: 통합 전 옛 URL은 301 리다이렉트하지 않고 실제 404로 정리합니다.
 * Cloudflare 대시보드에서 danmaek.com/* Worker Route를 제거하는 것을 권장합니다.
 * Route가 남아 있는 동안 이 Worker는 모든 요청을 원본(GitHub Pages)으로 그대로 전달합니다.
 */

export default {
  async fetch(request) {
    return fetch(request);
  },
};