import { GradientText } from 'components/gradient-text';
import { Callout } from 'components/mdx/callout';
import { RoundedImage } from 'components/mdx/rounded-image';
import { CustomLink } from 'components/mdx/custom-link';

const mdxComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  GradientText
};

export { mdxComponents };
