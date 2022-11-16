import { ReactNode, createElement, ComponentPropsWithoutRef } from 'react';
import { HeadingType } from 'lib/types';

const headings: { [key in HeadingType]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

type HeadingProps = ComponentPropsWithoutRef<HeadingType> & {
  type: HeadingType;
  children: ReactNode;
};

function Heading({
  type = 'h1',
  children,
  ...props
}: HeadingProps): JSX.Element {
  const headingType: string = headings[type];

  return createElement(headingType, props, children);
}

export default Heading;
