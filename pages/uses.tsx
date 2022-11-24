import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import Callout from 'components/Callout';
import MDXComponents from 'components/MDXComponents';
import { getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { Uses } from 'lib/interfaces';

type Props = {
  uses: Uses;
};

const Uses: NextPage<Props> = ({ uses }: Props): JSX.Element => {
  return (
    <Container
      title={`${uses.title} - Eduardo R. Ambriz`}
      description={uses.description}
    >
      <Wrapper className="pt-16 md:pt-20 mb-12">
        <h1>{uses.title}</h1>
        <p className="text-lg mb-8 max-w-prose">{uses.description}</p>
        <Callout>
          Full disclosure, some links on this site are affiliate links.
        </Callout>
      </Wrapper>

      <div className="px-7 pb-16 md:pb-20">
        <div className="prose">
          <MDXRemote {...uses.content} components={MDXComponents}></MDXRemote>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const uses = getFileBySlug('uses', 'uses', [
    'title',
    'description',
    'content'
  ]);

  const serializedContent = await getSerializedMDXContent(uses.content);

  return {
    props: {
      uses: {
        ...uses,
        content: serializedContent
      }
    }
  };
}

export default Uses;
