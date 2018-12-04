/* @flow */
import React from 'react';
import {
  Button,
} from '@windingtree/wt-ui-react';

type PropsType = {
  children: React$Node,
  CTA: string
};

const SolutionFooter = (props: PropsType) => {
  const { children, CTA } = props;
  return (
    <footer className="text-center">
      <p className="mb-2">{children}</p>
      <Button href="https://github.com/windingtree/">{CTA}</Button>
    </footer>
  );
};

export default SolutionFooter;
