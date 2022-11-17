import TimeFormatter from 'components/TimeFormatter';
import Heading from 'components/Heading';
import InternalLink from 'components/InternalLink';
import { Post } from 'lib/interfaces';
import { HeadingType } from 'lib/types';

interface Props {
  post: Post;
  heading?: HeadingType;
}

export default function BlogPost({ post, heading = 'h2' }: Props) {
  const { slug, datePublished, title, excerpt, readingTime } = post;

  return (
    <InternalLink
      href={{
        pathname: '/blog/[slug]',
        query: { slug }
      }}
    >
      <div className="md:w-full flex flex-col md:flex-row items-baseline justify-between md:gap-x-12 lg:gap-x-14 py-6 md:py-7 hover:bg-grey-50 dark:hover:bg-grey-930 hover:transition-none rounded-md md:rounded-xl px-7">
        <div className="w-full flex flex-row md:hidden items-center gap-x-2 mb-3 md:mb-0">
          <span className="block h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500"></span>
          <span className="inline-flex items-center uppercase text-grey-600 dark:text-grey-300">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
          <span>—</span>
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
        </div>
      </div>
    </InternalLink>
  );
}
