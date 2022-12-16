import type { NextPage } from 'next';

import Wrapper from 'components/Wrapper';
import Container from 'components/Container';
import SnippetCard from 'components/SnippetCard';

import { Snippet } from 'lib/interfaces';
import { getAllFiles } from 'lib/mdx';

type SnippetsProps = {
  allSnippets: Snippet[];
};

const Snippets: NextPage<SnippetsProps> = ({ allSnippets }) => {
  return (
    <Container title="Code Snippets - Eduardo R. Ambriz">
      <Wrapper>
        <section>
          <h1>Code Snippets</h1>
          <p className="text-lg max-w-prose mb-8">
            These are a collection of short code snippets that I’ve found useful
            in solving common development problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-between mx-auto gap-7">
            {allSnippets &&
              allSnippets.map((snippet: Snippet) => (
                <SnippetCard key={snippet.slug} snippet={snippet}></SnippetCard>
              ))}
          </div>
        </section>
      </Wrapper>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allSnippets = getAllFiles('snippets', [
    'title',
    'slug',
    'description',
    'category'
  ]);

  return {
    props: { allSnippets }
  };
};

export default Snippets;
