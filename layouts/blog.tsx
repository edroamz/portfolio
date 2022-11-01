import { useRouter } from 'next/router';
import Image from 'next/image';

import Container from 'components/Container';
import TimeFormatter from 'components/TimeFormatter';
import { PostType } from 'lib/types';

type Props = {
  post: PostType;
};

export default function BlogLayout({ post }: Props) {
  const router = useRouter();

  return (
    <Container
      title={`${post.title} - Eduardo R. Ambriz`}
      description={post.excerpt}
      date={post.datePublished}
      type="article"
    >
      {/* <article className="max-w-5xl mx-auto pt-12 md:pt-20 px-7 pb-6 mb-28">
        <div className="w-full flex flex-col lg:flex-row gap-x-12 gap-y-10">
          <div className="lg:basis-1/6">
            <button
              className="inline-block text-iris dark:text-iris-light font-medium dark:font-normal"
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              <svg
                className="inline-block h-3 w-3 stroke-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path fill="none" d="M0 0h256v256H0z" />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  d="m160 208-80-80 80-80"
                />
              </svg>
              Go back
            </button>
          </div>
          <div className="lg:basis-5/6">
            <div className="w-full flex items-center mb-6 md:mb-8">
              <span className="h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500 mr-2"></span>
              <span className="w-full text-gray-700 dark:text-gray-500">
                <TimeFormatter dateString={post.datePublished}></TimeFormatter>
              </span>
            </div>
            <h1 className="mb-10">{post.title}</h1>
            <div
              className="w-full markdown-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      </article> */}
      <article className="relative max-w-5xl mx-auto">
        <div className="flex flex-col mx-auto pt-12 md:pt-20 px-7 pb-6 mb-28">
          <div className="absolute left-0 pl-7">
            <button
              className="inline-block text-lg text-iris-dark dark:text-iris-light font-medium"
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              {/* <svg
                className="inline-block h-3 w-3 stroke-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path fill="none" d="M0 0h256v256H0z" />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  d="m160 208-80-80 80-80"
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="inline-block h-5 w-5 stroke-current mr-2"
              >
                <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="18"
                  d="M216 128H40M112 56l-72 72 72 72"
                />
              </svg>
              Go back
            </button>
          </div>
          <h1 className="mb-6 mt-28">{post.title}</h1>
          <div className="w-full flex items-center font-medium text-gray-700 dark:text-gray-400 mb-16">
            <span className="h-3 w-0.5 rounded-full bg-grey-200 dark:bg-grey-500 mr-3"></span>
            <span className="">
              <TimeFormatter dateString={post.datePublished}></TimeFormatter>
            </span>
            <span className=" ml-2">— 10 min read</span>
          </div>
          <img
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1587096473086-abb7a1ec4393"
            alt="alt"
            className="mb-12 rounded-lg"
          />
          <div
            className="w-full max-w-3xl mx-auto markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </article>
    </Container>
  );
}
