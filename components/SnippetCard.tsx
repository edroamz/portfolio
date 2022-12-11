import Link from 'next/link';

import ReactIcon from 'components/icons/ReactIcon';
import CSSIcon from 'components/icons/CSSIcon';
import { IconProps } from 'components/icons/types';

import { Snippet } from 'lib/interfaces';

type SnippetCardProps = {
  snippet: Snippet;
};

const categoryIcons: {
  [key: string]: { icon: (props: IconProps) => JSX.Element; props: IconProps };
} = {
  react: {
    icon: ReactIcon,
    props: { size: 'lg', variant: 'react-logo', decorative: true }
  },
  css: {
    icon: CSSIcon,
    props: { size: 'lg', decorative: true }
  }
};

export default function SnippetCard({ snippet }: SnippetCardProps) {
  const { slug, title, description, category } = snippet;

  const CategoryIcon = categoryIcons[category]['icon'];
  const iconProps = categoryIcons[category]['props'];

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
              <CategoryIcon {...iconProps}></CategoryIcon>
            </div>
            <h2 className="text-xl mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
