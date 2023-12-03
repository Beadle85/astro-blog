import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Beadle | Blog',
    description: 'My journey learning Astro and more',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}