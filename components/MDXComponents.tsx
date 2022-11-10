import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any) => {
  const href = props.href;
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

function RoundedImage(props: any) {
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

function Callout(props: any) {
  return (
    <div className="flex bg-grey-80 dark:bg-grey-900 rounded-md px-4 py-4 mt-6">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout
};

export default MDXComponents;
