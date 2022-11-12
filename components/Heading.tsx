import React, { ReactNode } from 'react';

const elements: { [key: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

interface Props {
  type: string;
  children: ReactNode;
  [key: string]: ReactNode;
}

function Heading({ type = 'h1', children, ...props }: Props) {
  const customTag = React.createElement(
    elements[type] || elements.h1,
    props,
    children
  );
  return customTag;
}

export default Heading;
