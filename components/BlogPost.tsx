import Link from 'next/link';

interface IBlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
}

export default function BlogPost({
  slug,
  title,
  excerpt,
  datePublished
}: IBlogPostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="grid grid-cols-1 md:flex items-baseline justify-center md:gap-x-12 lg:gap-x-14 py-7 hover:bg-gray-100 dark:hover:bg-neutral-800 md:rounded-xl px-5 sm:px-12 md:px-7">
        <div className="w-full md:w-1/5 text-sm text-gray-700 dark:text-gray-500 border-l-[3px] md:border-0 border-gray-300 dark:border-neutral-500 pl-3 md:pl-0 mb-4">
          {datePublished}
        </div>
        <div className="h-full w-full md:w-4/5 md:mr-9">
          <h2 className="text-black dark:text-white md:text-lg font-semibold w-full mb-4">
            {title}
          </h2>
          <p className="md:max-w-xl text-sm text-gray-700 dark:text-gray-400 mb-4">
            {excerpt}
          </p>
          <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">
            Read post →
          </span>
        </div>
      </a>
    </Link>
  );
}
