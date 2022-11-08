import React from 'react';

const elements: { [key: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

interface IProps {
  type: string;
  children: any;
  [key: string]: any;
}

function Heading({ type, children, ...props }: IProps) {
  const customTag = React.createElement(
    elements[type] || elements.h1,
    props,
    children
  );
  return customTag;
}

Heading.defaultProps = {
  type: 'h1'
};

export default Heading;
