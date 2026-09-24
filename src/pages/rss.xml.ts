import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getPosts } from '../lib/posts';

export async function GET() {
  const posts = getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`
    })),
    customData: '<language>ko-KR</language>'
  });
}
