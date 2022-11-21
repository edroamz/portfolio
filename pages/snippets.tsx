import { NextPage } from 'next';

import Wrapper from 'components/Wrapper';
import Container from 'components/Container';
import SnippetCard from 'components/SnippetCard';

import { Snippet } from 'lib/interfaces';
import { getAllFiles } from 'lib/mdx';

interface Props {
  allSnippets: Snippet[];
}

const Snippets: NextPage<Props> = ({ allSnippets }) => {
  return (
    <Container title="Code Snippets - Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <h1>Code Snippets</h1>
        <p className="text-lg mb-8">
          Here’s a collection of short, useful and sweet stuff.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-between mx-auto gap-7">
          {allSnippets &&
            allSnippets.map((snippet: Snippet) => (
              <SnippetCard key={snippet.slug} snippet={snippet}></SnippetCard>
            ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allSnippets = getAllFiles('snippets', ['title', 'slug', 'description']);

  return {
    props: { allSnippets }
  };
};

export default Snippets;
