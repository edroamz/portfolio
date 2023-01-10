import type { NextPage } from 'next';

import { Container } from 'components/container';
import { Wrapper } from 'components/wrapper';
import { mdxComponents } from 'components/mdx';

import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { IUses } from 'lib/interfaces';

type UsesProps = {
  uses: IUses;
};

const Uses: NextPage<UsesProps> = ({ uses }): JSX.Element => {
  return (
    <Container
      title={`${uses.title} - Eduardo R. Ambriz`}
      description={uses.description}
    >
      <Wrapper>
        <section>
          <h1>{uses.title}</h1>
          <p className="text-lg max-w-prose mb-8">{uses.description}</p>
          <div className="prose">
            <MDXRemote {...uses.content} components={mdxComponents}></MDXRemote>
          </div>
        </section>
      </Wrapper>
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
