/* @flow */
import React from 'react';
import { Col } from '@windingtree/wt-ui-react';
import Body from './Body';
import Title from './Title';

type PropsType = {
  children: React$Node
};

const Benefit = (props: PropsType) => {
  const { children } = props;
  return (
    <Col md={4} className="my-2 mt-md-4 mb-md-0 pr-md-3 text-center text-md-left">
      {children}
    </Col>
  );
};

Benefit.Body = Body;
Benefit.Title = Title;

export default Benefit;
