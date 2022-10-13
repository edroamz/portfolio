import { useRouter } from 'next/router';

import Container from 'components/Container';
import TimeFormatter from 'components/TimeFormatter';
import { PostType } from 'lib/types';

type Props = {
  post: PostType;
};

export default function BlogLayout({ post }: Props) {
  const router = useRouter();

  return (
    <Container type="article">
      <article className="max-w-4xl mx-auto pt-12 md:pt-20 px-5 sm:px-12 lg:px-6 pb-6 mb-28">
        <div className="w-full flex flex-col lg:flex-row gap-x-12 gap-y-10">
          <div className="lg:basis-1/6">
            <button
              className="text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition-colors"
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Go back
            </button>
          </div>
          <div className="lg:basis-5/6">
            <div className="w-full flex items-center mb-6 md:mb-8">
              <span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500 mr-3"></span>
              <span className="w-full text-gray-700 dark:text-gray-500">
                <TimeFormatter dateString={post.datePublished}></TimeFormatter>
              </span>
            </div>
            <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold w-full md:max-w-2xl mb-10">
              {post.title}
            </h1>
            <div
              className="w-full markdown-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      </article>
    </Container>
  );
}
