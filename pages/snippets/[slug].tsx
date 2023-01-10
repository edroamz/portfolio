import type { NextPage } from 'next';

import { SnippetsLayout } from 'layouts/snippets';

import { getAllFiles, getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { ISnippet } from 'lib/interfaces';

type SnippetPageProps = {
  snippet: ISnippet;
};

const SnippetPage: NextPage<SnippetPageProps> = ({ snippet }) => {
  return <SnippetsLayout snippet={snippet}></SnippetsLayout>;
};

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const snippet = getFileBySlug('snippets', params.slug, [
    'title',
    'slug',
    'description',
    'content'
  ]);

  if (!snippet) {
    throw new Error('Unexpected error: Snippet is undefined or empty');
  }

  if (!snippet.content) {
    throw new Error(
      "Unexpected error: Snippet 'content' is undefined or empty"
    );
  }

  const serializedContent = await getSerializedMDXContent(snippet.content);

  return {
    props: {
      snippet: {
        ...snippet,
        content: serializedContent
      }
    }
  };
}

export async function getStaticPaths() {
  const snippets = getAllFiles('snippets', ['slug']);

  return {
    paths: snippets.map((snippet) => {
      return {
        params: {
          slug: snippet.slug
        }
      };
    }),
    fallback: false
  };
}

export default SnippetPage;
