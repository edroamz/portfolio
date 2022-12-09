import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import mdxComponents from 'components/mdx';
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
        <p className="text-lg max-w-prose mb-8">{uses.description}</p>
      </Wrapper>

      <div className="px-7 pb-16 md:pb-20">
        <div className="prose">
          <MDXRemote {...uses.content} components={mdxComponents}></MDXRemote>
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
