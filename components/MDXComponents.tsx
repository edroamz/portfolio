import Link from 'next/link';
import Image from 'next/image';
import Callout from 'components/Callout';
import GradientText from 'components/GradientText';

const CustomLink = (props: any): JSX.Element => {
  if (!props.href) {
    throw new Error("Missing 'href' property");
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

function RoundedImage(props: any): JSX.Element {
  return props.caption ? (
    <figure className="flex flex-col items-center justify-center my-10">
      <Image alt={props.alt} className="rounded-lg" {...props}></Image>
      <figcaption className="text-base text-center text-grey-880 dark:text-grey-200 px-4 pt-5">
        {props.caption}
      </figcaption>
    </figure>
  ) : (
    <div className="flex flex-col items-center justify-center mt-10">
      <Image alt={props.alt} className="rounded-lg" {...props}></Image>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  GradientText
};

export default MDXComponents;
