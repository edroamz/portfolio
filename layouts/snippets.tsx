import { useRouter } from 'next/router';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import MDXComponents from 'components/MDXComponents';

import { Snippet } from 'lib/interfaces';
import { MDXRemote } from 'next-mdx-remote';

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
        <button
          className="inline-flex items-center text-base text-cobalt-dark dark:text-blue-400 font-medium leading-none tracking-tight self-start mb-10"
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
            <h1 className="text-center">{snippet.title}</h1>
          </div>
        </div>

        <div className="prose">
          <div className="border-t border-grey-100 dark:border-grey-880 pt-8 md:pt-10"></div>
          <MDXRemote
            {...snippet.content}
            components={MDXComponents}
          ></MDXRemote>
        </div>
      </Wrapper>
    </Container>
  );
}
