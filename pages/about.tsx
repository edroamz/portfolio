import type { NextPage } from 'next';
import Container from 'components/Container';
import Wrapper from 'components/Wrapper';

const About: NextPage = () => {
  return (
    <Container title="About - Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <h1 className="mb-7">About Me</h1>
      </Wrapper>
    </Container>
  );
};

export default About;
