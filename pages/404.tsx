import type { NextPage } from 'next';

import { Container } from 'components/container';
import { Wrapper } from 'components/wrapper';
import { InternalLink } from 'components/links/internal-link';
import { GradientText } from 'components/gradient-text';

const NotFound: NextPage = () => {
  return (
    <Container title="404 – Eduardo R. Ambriz">
      <Wrapper>
        <section className="flex flex-col items-start sm:items-center justify-center gap-y-3">
          <GradientText variant="summer" textSize="xl">
            <span className="font-extrabold tracking-wide">404</span>
          </GradientText>
          <h1 className="mb-0">Page not found.</h1>
          <p className="text-lg text-left sm:text-center mb-8 max-w-prose">
            Sorry, we couldn’t find the page you’re looking for. Please check
            the URL in the address bar and try again.
          </p>
          <InternalLink
            href="/"
            textSize="lg"
            variant="highlight"
            fontWeight={500}
          >
            Go back home <span className="pl-2">→</span>
          </InternalLink>
        </section>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
