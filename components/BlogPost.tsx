import Link from 'next/link';

import TimeFormatter from 'components/TimeFormatter';
import { PostType } from 'lib/types';

type Props = {
  post: PostType;
};

export default function BlogPost({ post }: Props) {
  const { slug, datePublished, title, excerpt } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full flex flex-col md:flex-row items-baseline justify-between md:gap-x-12 lg:gap-x-14 py-7 hover:bg-gray-100 dark:hover:bg-neutral-800 md:rounded-xl px-5 sm:px-12 md:px-7">
        <div className="w-full flex md:hidden items-center mb-4 md:mb-0">
          <span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500 mr-2"></span>
          <span className="w-full text-sm text-gray-700 dark:text-gray-500">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full hidden md:inline-block w-full md:basis-1/5 text-sm text-gray-700 dark:text-gray-500 border-l-[3px] md:border-0 border-gray-300 dark:border-neutral-500 pl-3 md:pl-0 mb-4 md:mb-0 break-words">
          <span>
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full w-full md:basis-4/5">
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
