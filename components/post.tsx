import { Separator } from '@radix-ui/react-separator';
import { InternalLink } from 'components/links/internal-link';
import { TimeFormatter } from 'components/time-formatter';

import { IPost } from 'lib/interfaces';

type PostProps = {
  post: IPost;
  heading?: 'h1' | 'h2' | 'h3' | 'h4';
};

function Post({ post, heading = 'h2' }: PostProps) {
  const { slug, datePublished, title, excerpt, readingTime } = post;

  const Title = heading;

  return (
    <InternalLink
      href={{
        pathname: '/blog/[slug]',
        query: { slug }
      }}
      variant="rounded"
      style={{ zIndex: '10' }}
    >
      <div className="md:w-full flex flex-col md:flex-row items-baseline justify-between md:gap-x-12 lg:gap-x-14 py-6 md:py-7 hover:bg-grey-50 dark:hover:bg-grey-900 hover:transition-none rounded-xl px-2 md:px-7 ">
        <div className="w-full flex flex-row md:hidden items-center gap-x-2 mb-1 md:mb-0">
          <Separator
            decorative
            orientation="vertical"
            className="block h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500"
          ></Separator>
          <span className="inline-flex items-center text-sm text-grey-600 dark:text-grey-300">
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
          <Separator
            className="font-medium text-grey-300 dark:text-grey-600"
            decorative
          >
            —
          </Separator>
          <span className="inline-block text-sm text-grey-600 dark:text-grey-300">
            {readingTime}
          </span>
        </div>
        <div className="h-full hidden md:inline-block w-full md:basis-1/5 text-base text-grey-600 dark:text-grey-300 pl-3 md:pl-0 mb-4 md:mb-0 break-words">
          <span>
            <TimeFormatter dateString={datePublished}></TimeFormatter>
          </span>
        </div>
        <div className="h-full w-full md:basis-4/5">
          <span className="hidden md:inline-block text-base text-grey-600 dark:text-grey-300 mb-2">
            {readingTime}
          </span>
          <Title className="text-xl md:text-2xl mb-1">{title}</Title>
          <p className="text-lg">{excerpt}</p>
        </div>
      </div>
    </InternalLink>
  );
}

export { Post };
