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
      <a className="blog-post-link">
        <div className="w-full flex md:hidden items-center mb-4 md:mb-0">
          <span className="h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500 mr-2"></span>
          <span className="text-grey-600 dark:text-grey-400 inline-flex items-center">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
            <span className="mx-2">—</span>
            <span className="inline-block text-grey-600 dark:text-grey-400 font-medium">
              10 min read
            </span>
          </span>
        </div>
        <div className="h-full hidden md:inline-block w-full md:basis-1/5 text-grey-600 dark:text-grey-400 pl-3 md:pl-0 mb-4 md:mb-0 break-words">
          <span>
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full w-full md:basis-4/5">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="hidden md:inline-block w-5 h-5 text-grey-1000 dark:text-grey-50 mr-2"
          > */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M48 216a23.9 23.9 0 0 1 24-24h136V32H72a23.9 23.9 0 0 0-24 24ZM48 216v8h144"
            /> */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M128 88a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8v128a8 8 0 0 1-8 8h-64a32 32 0 0 0-32 32M24 192a8 8 0 0 0 8 8h64a32 32 0 0 1 32 32V88a32 32 0 0 0-32-32H32a8 8 0 0 0-8 8Z"
            /> */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="m192 224-64-40-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8Z"
            /> */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M176 32v96l-32-24-32 24V32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M48 216a23.9 23.9 0 0 1 24-24h136V32H72a23.9 23.9 0 0 0-24 24ZM48 216v8h144"
            /> */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="m168 224-56-40-56 40V72a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="M88 64V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v152l-32-22.9"
            /> */}
          {/* <path fill="none" d="M0 0h256v256H0z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="m192 224-64-40-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              d="m192 176-64-40-64 40"
            /> */}
          {/* </svg> */}
          <span className="hidden md:inline-block text-grey-600 dark:text-grey-400 font-medium mb-3">
            10 min read
          </span>
          <Heading type={headingType} className="text-2xl mb-2">
            {title}
          </Heading>
          <p className="text-lg mb-0">{excerpt}</p>
          {/* <span className="inline-block text-iris dark:text-iris-light font-medium dark:font-normal">
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
          </span> */}
        </div>
      </a>
    </Link>
  );
}
