import Image from 'next/image';
import ExternalLink from 'components/ExternalLink';
import project2 from '/public/static/images/project2.jpg';

type Url = {
  href: string;
  pathname: string;
};

type Product = {
  title: string;
  excerpt: string;
  url: Url;
};

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps): JSX.Element {
  const { title, excerpt, url } = product;
  return (
    <div className="overflow-hidden">
      <ExternalLink href={url.href} variant="rounded">
        <Image
          src={project2}
          alt=""
          className="rounded-xl"
          placeholder="blur"
        />
      </ExternalLink>
      <h4 className="text-xl mt-7">{title}</h4>
      <p className="text-[17px] leading-8 mt-2 mb-4">{excerpt}</p>
      <ExternalLink href={url.href} variant="primary" textSize="lg">
        {url.pathname} <span className="pl-2 text-sm">→</span>
      </ExternalLink>
    </div>
  );
}
