import Link from 'next/link';

import Container from 'components/Container';

interface IBlogArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

function BlogArticle({ slug, title, excerpt, date }: IBlogArticleProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="grid grid-cols-1 md:flex items-baseline justify-center md:gap-x-12 lg:gap-x-14 py-6 hover:bg-gray-100 dark:hover:bg-neutral-800 md:rounded-xl px-5 sm:px-12 md:px-7">
        <div className="w-full md:w-1/5 text-sm text-gray-700 dark:text-gray-500 border-l-[3px] md:border-0 border-gray-300 dark:border-neutral-500 pl-3 md:pl-0 mb-4">
          {date}
        </div>
        <div className="h-full w-full md:w-4/5 md:mr-9">
          <h2 className="text-black dark:text-white md:text-lg font-semibold w-full mb-4">
            {title}
          </h2>
          <p className="md:max-w-xl text-sm text-gray-700 dark:text-gray-400 mb-4">
            {excerpt}
          </p>
          <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">
            Read article →
          </span>
        </div>
      </a>
    </Link>
  );
}

export default function Blog() {
  return (
    <Container title="Blog – Eduardo Rodriguez">
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 px-5 sm:px-12 lg:px-6">
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold w-full md:max-w-2xl mb-4 md:mb-6">
          Blog
        </h1>
        <p className="max-w-xl mb-8 text-gray-700 dark:text-gray-400 text-base">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of.
        </p>
      </div>
      <div className="w-full mb-12 pb-20 md:px-12 lg:px-6 max-w-4xl mx-auto">
        <div className="relative mt-12 md:mt-14 lg:mt-16 grid gap-y-6 md:gap-y-2 max-w-4xl mx-auto">
          <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-gray-200 dark:border-zinc-800 hidden md:block " />
          <BlogArticle
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            date="September 5, 2022"
          ></BlogArticle>
          <BlogArticle
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            date="September 5, 2022"
          ></BlogArticle>
          <BlogArticle
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            date="September 5, 2022"
          ></BlogArticle>
        </div>
      </div>
    </Container>
  );
}
