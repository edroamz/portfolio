import { useRouter } from 'next/router';
import Image from 'next/image';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import TimeFormatter from 'components/TimeFormatter';
import MDXComponents from 'components/MDXComponents';
import Button from 'components/Button';

import { Post } from 'lib/interfaces';
import { MDXRemote } from 'next-mdx-remote';
import ExternalLink from 'components/ExternalLink';
import InternalLink from 'components/InternalLink';

interface Props {
  post: Post;
}

export default function BlogLayout({ post }: Props) {
  const router = useRouter();

  return (
    <Container
      title={`${post.title} - Eduardo R. Ambriz`}
      description={post.excerpt}
      date={post.datePublished}
      type="article"
    >
      <Wrapper as="article" className="pt-10 pb-16 md:pb-20">
        <Button
          variant="primaryLink"
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
        </Button>
        <div className="flex flex-col items-center mt-10">
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
          <p className="text-center text-xl md:text-2xl md:tracking-tight leading-9 md:leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="prose">
          <div className="border-t border-grey-100 dark:border-grey-880 pt-8 md:pt-10"></div>
          <MDXRemote {...post.content} components={MDXComponents}></MDXRemote>
        </div>

        <div className="text-lg max-w-prose mx-auto mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-y-10">
            <div className="flex-1/2">
              <div className="inline-flex flex-row items-center justify-start gap-x-3">
                <InternalLink href="/about">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={`${post.author.picture}`}
                      alt={`${post.author.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </InternalLink>
                <div className="ml-1 flex flex-col items-baseline justify-center">
                  <span className="text-[13.5px] tracking-wider font-medium uppercase text-grey-600 dark:text-grey-300">
                    Written by
                  </span>
                  <InternalLink href="/about" textSize="lg">
                    <span className="font-semibold text-grey-700 hover:text-grey-1000 dark:text-grey-150 dark:hover:text-grey-0">
                      {post.author.name}
                    </span>
                  </InternalLink>
                </div>
              </div>
            </div>
            <div className="flex-1/2 flex justify-end items-center gap-2">
              <ExternalLink href="https://twitter.com">
                <span className="text-grey-700 hover:text-grey-1000 dark:text-grey-150 dark:hover:text-grey-0">
                  Discuss on Twitter
                </span>
              </ExternalLink>
              <span className="text-grey-600 dark:text-grey-300 text-lg">
                •
              </span>
              <ExternalLink href="https://github.com">
                <span className="text-grey-700 hover:text-grey-1000 dark:text-grey-150 dark:hover:text-grey-0">
                  Suggest Change on Github
                </span>
              </ExternalLink>
            </div>
          </div>
          <hr className="border-grey-120 dark:border-grey-880 mt-7" />
          <section className="flex flex-col items-center justify-center mt-16 md:mt-20">
            <InternalLink href="/blog/preview" variant="block">
              <h6 className="font-medium text-center text-sm text-grey-700 dark:text-grey-150">
                — Read this next —
              </h6>
              <p className="text-center text-xl font-medium text-cobalt-dark group-hover:text-grey-1000 dark:text-blue-400 dark:group-hover:text-grey-100">
                5 ways to get the work done
              </p>
            </InternalLink>
          </section>
        </div>
      </Wrapper>
    </Container>
  );
}
