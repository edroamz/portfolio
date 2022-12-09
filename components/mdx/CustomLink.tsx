import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type AnchorType = Pick<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'key' | keyof AnchorHTMLAttributes<HTMLAnchorElement>
>;

type Props = AnchorType;

export const CustomLink = (props: Props): JSX.Element => {
  if (!props.href) {
    throw new Error(
      `Missing 'href' property in \`${CustomLink.name}\` component`
    );
  }

  const href: string = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};
