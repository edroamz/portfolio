import Image from 'next/image';

import { Separator } from '@radix-ui/react-separator';
import { InternalLink } from 'components/links/internal-link';
import { TimeFormatter } from 'components/time-formatter';

import { IPost } from 'lib/interfaces';
import project2 from 'public/static/images/project2.jpg';

type PostRecommendedProps = {
  post: IPost;
};

function PostRecommended({ post }: PostRecommendedProps): JSX.Element {
  const { title, excerpt, datePublished, dateModified, readingTime } = post;

  return (
    <InternalLink href="/blog/preview" variant="rounded">
      <Image
        src={project2}
        alt=""
        width={500}
        height={400}
        className="rounded-xl"
      />
      <h2 className="text-[24px] font-extrabold leading-9 tracking-tight mt-8 md:mt-7 mb-0">
        {title}
      </h2>
      <p className="mt-2 leading-7">{excerpt}</p>
      <div className="inline-flex flex-row items-center gap-x-3 mt-6">
        <span className="inline-block text-xs tracking-normal text-grey-600 dark:text-grey-300">
          <TimeFormatter
            dateString={dateModified ? dateModified : datePublished}
          ></TimeFormatter>
        </span>
        <Separator
          decorative
          orientation="vertical"
          className="text-grey-150 dark:text-grey-700 text-[12px]"
        >
          |
        </Separator>
        <span className="inline-block text-xs tracking-normal text-grey-600 dark:text-grey-300">
          {readingTime}
        </span>
      </div>
    </InternalLink>
  );
}

export { PostRecommended };
