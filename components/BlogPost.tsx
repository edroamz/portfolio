import Link from 'next/link';

import TimeFormatter from 'components/TimeFormatter';
import Heading from 'components/Heading';
import { IPost } from 'lib/interfaces';

interface IProps {
  post: IPost;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function BlogPost({ post, heading = 'h2' }: IProps) {
  const { slug, datePublished, title, excerpt, readingTime } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="blog-post-link">
        <div className="w-full flex flex-row md:hidden items-center gap-x-2 mb-3 md:mb-0">
          <span className="block h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500"></span>
          <span className="inline-flex items-center uppercase text-grey-600 dark:text-grey-300">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
          <span className="">—</span>
          <span className="inline-block uppercase text-grey-600 dark:text-grey-300">
            {readingTime}
          </span>
        </div>
        <div className="h-full hidden md:inline-block w-full md:basis-1/5 uppercase text-grey-600 dark:text-grey-300 pl-3 md:pl-0 mb-4 md:mb-0 break-words">
          <span>
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full w-full md:basis-4/5">
          <span className="hidden md:inline-block uppercase text-grey-600 dark:text-grey-300 mb-2">
            {readingTime}
          </span>
          <Heading type={heading} className="text-xl md:text-2xl mb-2">
            {title}
          </Heading>
          <p className="text-lg mb-3">{excerpt}</p>
          <span className="inline-block text-lg text-cobalt-dark dark:text-blue-400 font-medium leading-none tracking-tight underline underline-offset-4">
            Read more
          </span>
        </div>
      </a>
    </Link>
  );
}

BlogPost.defaultProps = {
  heading: 'h2'
};
