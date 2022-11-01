import { NextPage } from 'next';

import Container from 'components/Container';

const Snippets: NextPage = () => {
  return (
    <Container title="Projects - Eduardo R. Ambriz">
      <div className="max-w-5xl mx-auto pt-12 md:pt-20 pb-4 px-7">
        <h1>Snippets</h1>
        <p className="text-lg mb-8">
          Here’s a collection of short, useful and sweet stuff.
        </p>
      </div>
    </Container>
  );
};

export default Snippets;
