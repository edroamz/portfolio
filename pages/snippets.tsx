import { NextPage } from 'next';

import Wrapper from 'components/Wrapper';
import Container from 'components/Container';
import SnippetCard from 'components/SnippetCard';

const Snippets: NextPage = () => {
  return (
    <Container title="Snippets - Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <h1>Code Snippets</h1>
        <p className="text-lg mb-8">
          Here’s a collection of short, useful and sweet stuff.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-between mx-auto gap-7">
          <SnippetCard
            slug="gradient-text"
            title="Gradient text"
            excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          ></SnippetCard>
          <SnippetCard
            slug="blur-effect-on-navbar"
            title="Blur effect on navbar"
            excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ab tempore tenetur quidem aut."
          ></SnippetCard>
          <SnippetCard
            slug="cool-trick"
            title="Cool trick"
            excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptatem, porro dignissimos iure voluptatum dolorem obcaecati nulla quia cumque magni."
          ></SnippetCard>
          <SnippetCard
            slug="cool-trick 2"
            title="Cool trick 2"
            excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, esse."
          ></SnippetCard>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Snippets;
