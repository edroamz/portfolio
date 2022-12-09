import GradientText from 'components/GradientText';
import Callout from 'components/mdx/Callout';
import RoundedImage from 'components/mdx/RoundedImage';
import { CustomLink } from 'components/mdx/CustomLink';

const mdxComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  GradientText
};

export default mdxComponents;
