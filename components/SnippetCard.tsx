import Link from 'next/link';
import { Snippet } from 'lib/interfaces';
import Icon from 'components/Icon';
import { IconSizeType, IconVariantType } from 'lib/types';

interface Props {
  snippet: Snippet;
}

const iconProps: {
  [key: string]: {
    name: string;
    size?: IconSizeType;
    variant?: IconVariantType;
    decorative?: boolean;
  };
} = {
  react: { name: 'react', size: 'lg', variant: 'react', decorative: true },
  css: { name: 'css', size: 'lg', decorative: true }
};

export default function SnippetCard({ snippet }: Props) {
  const { slug, title, description, category } = snippet;

  const categoryProps = iconProps[category];

  return (
    <Link
      href={{
        pathname: '/snippets/[slug]',
        query: { slug }
      }}
      className="h-full bg-white dark:bg-grey-1000 shadow hover:shadow-lg dark:shadow-none dark:border-x-transparent dark:border-y dark:border-x sm:dark:border-grey-800 sm:dark:even:border-r-transparent sm:dark:odd:border-l-transparent lg:dark:even:border-grey-800 lg:dark:odd:border-grey-800 dark:border-grey-800 lg:dark:hover:even:border-white lg:dark:odd:hover:border-white dark:hover:border-white hover:transition-shadow dark:hover:transition-colors rounded-lg break-words"
    >
      <div className="h-full p-7">
        <div className="h-full flex flex-col justify-between gap-y-7">
          <div>
            <div className="h-11 w-11 bg-transparent flex items-center justify-center rounded-full p-1 border border-grey-120 dark:border-grey-700 mb-2">
              <Icon {...categoryProps} />
            </div>
            <h2 className="text-xl mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
