import Link from 'next/link';

import TimeFormatter from 'components/TimeFormatter';
import Heading from 'components/Heading';
import { PostType } from 'lib/types';

type Props = {
  post: PostType;
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function BlogPost({ post, headingType = 'h2' }: Props) {
  const { slug, datePublished, title, excerpt } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full flex flex-col md:flex-row items-baseline justify-between md:gap-x-12 lg:gap-x-14 py-7 hover:bg-grey-50 dark:hover:bg-grey-930 md:rounded-xl px-7">
        <div className="w-full flex md:hidden items-center mb-4 md:mb-0">
          <span className="h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500 mr-2"></span>
          <span className="w-full text-sm text-grey-500">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full hidden md:inline-block w-full md:basis-1/5 text-sm text-grey-500 pl-3 md:pl-0 mb-4 md:mb-0 break-words">
          <span>
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full w-full md:basis-4/5">
          <Heading type={headingType} className="text-2xl mb-2">
            {title}
          </Heading>
          <p className="mb-4">{excerpt}</p>
          <span className="inline-block text-iris dark:text-iris-light font-medium dark:font-normal">
            Read post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 stroke-current ml-1"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" stroke="none"></rect>
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></polyline>
            </svg>
          </span>
        </div>
      </a>
    </Link>
  );
}
