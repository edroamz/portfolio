import { getFileSlugs } from 'lib/mdx';
import { GetServerSideProps } from 'next';

const BASE_URL = 'localhost:3000/';

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${slugs
      .map((slug: string) => {
        return `
            <url>
                <loc>${`${BASE_URL}/${slug}`}</loc>
            </url>
        `;
      })
      .join('')}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = getFileSlugs('blog');
  const allStaticPaths = ['', 'projects', 'uses', 'blog'];

  const allPages: string[] = [
    ...allPosts.map((slug) => {
      const fileName = slug.replace(/\.mdx$/, '');
      return `blog/${fileName}`;
    }),
    ...allStaticPaths
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
};

export default function Sitemap() {
  return null;
}
