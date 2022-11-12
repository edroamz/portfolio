import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any): JSX.Element => {
  if (!props.href) {
    throw new Error("Missing 'href' property");
  }

  const href: string = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any): JSX.Element {
  return props.caption ? (
    <figure className="my-10">
      <Image alt={props.alt} className="rounded-lg" {...props}></Image>
      <figcaption className="text-sm text-center text-grey-880 dark:text-grey-200 px-4 pt-2">
        {props.caption}
      </figcaption>
    </figure>
  ) : (
    <div className="my-10">
      <Image alt={props.alt} className="rounded-lg" {...props}></Image>
    </div>
  );
}

function Callout(props: any): JSX.Element {
  return (
    <div className="flex gap-x-3 bg-grey-80 dark:bg-grey-900 bg-gradient-to-r from-grey-50 to-grey-80 dark:from-grey-900 dark:to-grey-880 border border-grey-120  dark:border-grey-700 rounded-md px-4 py-4 mt-6">
      <div className="flex items-baseline">{props.emoji}</div>
      <div className="callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout
};

export default MDXComponents;
