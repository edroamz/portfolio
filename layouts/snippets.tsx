import { Separator } from '@radix-ui/react-separator';
import { Container } from 'components/container';
import { mdxComponents } from 'components/mdx';
import { InternalLink } from 'components/links/internal-link';

import { MDXRemote } from 'next-mdx-remote';
import { ISnippet } from 'lib/interfaces';

type SnippetsLayoutProps = {
  snippet: ISnippet;
};

function SnippetsLayout({ snippet }: SnippetsLayoutProps) {
  const { title, description, content } = snippet;

  return (
    <Container title={`${title} - Eduardo R. Ambriz`} description={description}>
      <section className="max-w-5xl mx-auto px-7 pt-9 pb-16 md:pb-20">
        <InternalLink href="/snippets" variant="highlight" fontWeight={500}>
          <span className="pr-2">←</span>Back to Snippets
        </InternalLink>
        <div className="flex flex-col items-center justify-center text-center text-lg max-w-prose mx-auto mt-10">
          <span className="uppercase tracking-widest font-mono font-extrabold text-coral-dark dark:text-coral-light">
            Snippet
          </span>
          <h1 className="text-3xl md:text-4xl text-center font-extrabold mb-1">
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
      </section>
    </Container>
  );
}

export { SnippetsLayout };
