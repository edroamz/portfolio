import { useRouter } from 'next/router';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import MDXComponents from 'components/MDXComponents';

import { Snippet } from 'lib/interfaces';
import { MDXRemote } from 'next-mdx-remote';
import Button from 'components/Button';
import * as Separator from '@radix-ui/react-separator';
import GradientText from 'components/GradientText';

interface Props {
  snippet: Snippet;
}

export default function SnippetsLayout({ snippet }: Props) {
  const router = useRouter();

  return (
    <Container
      title={`${snippet.title} - Eduardo R. Ambriz`}
      description={snippet.description}
    >
      <Wrapper as="section" className="pt-10 pb-16 md:pb-20">
        <Button
          variant="primaryLink"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <span className="pr-2">←</span>
          Back
        </Button>
        <div className="flex flex-col items-start justify-center text-lg max-w-prose mx-auto mt-7">
          <GradientText variant="summer">
            <span className="uppercase tracking-wider text-xl font-extrabold">
              Snippet
            </span>
          </GradientText>
          <h1 className="text-3xl md:text-4xl text-left font-extrabold my-1">
            {snippet.title}
          </h1>
          <p>{snippet.description}</p>
        </div>
        <Separator.Root
          decorative
          orientation="horizontal"
          className="max-w-3xl mx-auto border-t border-grey-100 dark:border-grey-880 my-7"
        ></Separator.Root>

        <div className="prose">
          <MDXRemote
            {...snippet.content}
            components={MDXComponents}
          ></MDXRemote>
        </div>
      </Wrapper>
    </Container>
  );
}
