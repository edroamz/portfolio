import { useRouter } from 'next/router';
import Image from 'next/image';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import TimeFormatter from 'components/TimeFormatter';
import MDXComponents from 'components/MDXComponents';

import { IPost } from 'lib/interfaces';
import { MDXRemote } from 'next-mdx-remote';

interface IProps {
  post: IPost;
}

export default function BlogLayout({ post }: IProps) {
  const router = useRouter();

  return (
    <Container
      title={`${post.title} - Eduardo R. Ambriz`}
      description={post.excerpt}
      date={post.datePublished}
      type="article"
    >
      <Wrapper as="article" className="blog-article pt-10 pb-16 md:pb-20">
        <button
          className="inline-flex items-center text-lg text-cobalt-dark dark:text-blue-400 font-medium leading-none tracking-tight self-start mb-10"
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <svg
            className="inline-block h-4 w-4 stroke-current mr-1"
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
        <div className="flex flex-col items-center">
          <div className="inline-flex flex-row items-center justify-center gap-x-2 mb-5">
            <span className="font-medium uppercase text-grey-600 dark:text-grey-300">
              <TimeFormatter dateString={post.datePublished}></TimeFormatter>
            </span>
            <span className="text-grey-600 dark:text-grey-300 text-lg">•</span>
            <span className="font-medium uppercase  text-grey-600 dark:text-grey-300">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-center mb-8">{post.title}</h1>
        </div>
        <div className="text-lg max-w-prose mx-auto mb-16 md:mb-20">
          <div className="flex flex-row items-center justify-center md:justify-end gap-x-3">
            <div className="relative h-7 w-7 rounded-full overflow-hidden">
              <Image
                src={`${post.author.picture}`}
                alt={`${post.author.name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="font-medium text-grey-800 dark:text-grey-200">
              {post.author.name}
            </span>
          </div>
        </div>

        <div className="w-full text-lg md:max-w-prose mx-auto">
          <div className="border-t border-grey-100 dark:border-grey-880 pt-8 md:pt-10"></div>
          <MDXRemote {...post.mdxSource} components={MDXComponents}></MDXRemote>
        </div>
      </Wrapper>
    </Container>
  );
}
