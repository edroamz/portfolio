import Container from 'components/Container';
import BlogPost from 'components/BlogPost';

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
      <div className="w-full mb-28 md:px-12 lg:px-6 max-w-4xl mx-auto">
        <div className="relative mt-12 md:mt-14 lg:mt-16 grid gap-y-2 max-w-4xl mx-auto">
          <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-gray-200 dark:border-zinc-800 hidden md:block " />
          <BlogPost
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            datePublished="September 5, 2022"
          ></BlogPost>
          <BlogPost
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            datePublished="September 5, 2022"
          ></BlogPost>
          <BlogPost
            slug="testing"
            title="Crafting a design system for a multiplanetary future"
            excerpt="Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system."
            datePublished="September 5, 2022"
          ></BlogPost>
        </div>
      </div>
    </Container>
  );
}
