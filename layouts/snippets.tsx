import { useRouter } from 'next/router';

import { Separator } from '@radix-ui/react-separator';
import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import mdxComponents from 'components/mdx';
import Button from 'components/Button';

import { MDXRemote } from 'next-mdx-remote';
import { Snippet } from 'lib/interfaces';

type SnippetsLayoutProps = {
  snippet: Snippet;
};

export default function SnippetsLayout({ snippet }: SnippetsLayoutProps) {
  const router = useRouter();
  const { title, description, content } = snippet;

  return (
    <Container title={`${title} - Eduardo R. Ambriz`} description={description}>
      <Wrapper as="section" className="pt-10 pb-16 md:pb-20">
        <Button
          variant="primaryLink"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <span className="pr-2">←</span>
          Back
        </Button>
        <div className="flex flex-col items-start justify-center text-lg max-w-prose mx-auto mt-8">
          <span className="uppercase tracking-widest font-mono font-extrabold text-coral-dark dark:text-coral-light">
            Snippet
          </span>
          <h1 className="text-3xl md:text-4xl text-left font-extrabold my-1">
            {title}
          </h1>
          <p>{description}</p>
        </div>
        <Separator
          decorative
          orientation="horizontal"
          className="max-w-3xl mx-auto border-t border-grey-100 dark:border-grey-880 my-7"
        ></Separator>

        <div className="prose">
          <MDXRemote {...content} components={mdxComponents}></MDXRemote>
        </div>
      </Wrapper>
    </Container>
  );
}
