import { ReactNode, createElement, ComponentPropsWithoutRef } from 'react';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

const headings: { [key in HeadingType]: HeadingType } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4'
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
