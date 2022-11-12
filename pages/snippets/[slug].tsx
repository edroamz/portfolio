import SnippetLayout from 'layouts/snippets';
import { getAllFiles, getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { Snippet } from 'lib/interfaces';

interface Props {
  snippet: Snippet;
}
export default function SnippetPage({ snippet }: Props) {
  return <SnippetLayout snippet={snippet}></SnippetLayout>;
}

interface Params {
  params: {
    slug: string;
  };
}
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
