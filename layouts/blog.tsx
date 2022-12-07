import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import TimeFormatter from 'components/TimeFormatter';
import MDXComponents from 'components/MDXComponents';
import Button from 'components/Button';
import SharePost from 'components/SharePost';
import RecommendedPost from 'components/RecommendedPost';
import ExternalLink from 'components/ExternalLink';

import { Post } from 'lib/interfaces';

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
          <span className="pr-2">←</span>
          Back
        </Button>
        <div className="flex flex-col items-center mt-5">
          <div className="inline-flex flex-row items-center justify-center gap-x-3 mb-4">
            <span className="text-sm md:text-base tracking-normal font-medium text-grey-600 dark:text-grey-300">
              Published on{' '}
              <TimeFormatter dateString={post.datePublished}></TimeFormatter>
            </span>
            <Separator
              decorative
              orientation="vertical"
              className="text-grey-200 dark:text-grey-600 text-[12px]"
            >
              |
            </Separator>
            <span className="text-sm md:text-base font-medium text-grey-600 dark:text-grey-300">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl text-center font-extrabold mb-4">
            {post.title}
          </h1>
          <p className=" text-center mx-auto text-xl max-w-3xl md:tracking-tight">
            {post.excerpt}
          </p>
        </div>
        <Separator
          decorative
          orientation="horizontal"
          className="max-w-3xl mx-auto border-t border-grey-100 dark:border-grey-880 my-14"
        ></Separator>

        <div className="prose">
          <MDXRemote {...post.content} components={MDXComponents}></MDXRemote>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-5 items-start md:items-center justify-between max-w-2xl mx-auto mt-16">
          <div className="inline-flex flex-row items-center justify-start gap-x-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={`${post.author.picture}`}
                alt={`${post.author.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-1 flex flex-col items-baseline justify-center">
              <span className="font-medium text-[17px] tracking-normal text-grey-700 dark:text-grey-150">
                {post.author.name}
              </span>
            </div>
          </div>
          <ExternalLink
            href="https://github.com"
            variant="underline"
            textSize="xs"
          >
            Suggest Change on Github
          </ExternalLink>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center mt-16">
          <SharePost
            postUrl="https://placeholder.com"
            postTitle={post.title}
          ></SharePost>
          {/* <hr className="h-px w-full border-grey-100 dark:border-grey-880 mt-14" /> */}
          {/* <section className="flex flex-col items-center justify-center mt-16 md:mt-20">
            <InternalLink href="/blog/preview" variant="block">
              <h6 className="font-medium text-center text-sm text-grey-700 dark:text-grey-150">
                — Read this next —
              </h6>
              <p className="text-center text-lg font-medium text-cobalt-dark group-hover:text-grey-1000 dark:text-blue-400 dark:group-hover:text-grey-100">
                5 ways to get the work done
              </p>
            </InternalLink>
          </section> */}
        </div>
        <Separator
          decorative
          orientation="horizontal"
          className="max-w-5xl mx-auto border-t border-grey-100 dark:border-grey-900 mt-14"
        ></Separator>
        <section className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-between gap-x-20 gap-y-16 mt-24 md:mt-28">
          <RecommendedPost post={post}></RecommendedPost>
          <RecommendedPost post={post}></RecommendedPost>
        </section>
      </Wrapper>
    </Container>
  );
}
