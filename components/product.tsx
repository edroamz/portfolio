import Image from 'next/image';

import { ExternalLink } from 'components/links/external-link';

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

function Product({ product }: ProductProps): JSX.Element {
  const { title, excerpt, url } = product;
  return (
    <div>
      <ExternalLink href={url.href} variant="rounded" tabIndex={-1}>
        <Image
          src={project2}
          alt=""
          className="rounded-lg max-h-60 object-cover"
          placeholder="blur"
        />
      </ExternalLink>
      <h4 className="text-lg leading-relaxed mt-6">{title}</h4>
      <p className="text-[16px] mt-1 mb-2">{excerpt}</p>
      <ExternalLink href={url.href} variant="highlight" fontWeight={500}>
        <span className="text-[16px]">
          {url.pathname} <span className="pl-2 text-sm">→</span>
        </span>
      </ExternalLink>
    </div>
  );
}

export { Product };
