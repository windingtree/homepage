/* @flow */
import React from 'react';
import { Col } from '@windingtree/wt-ui-react';

type PropsType = {
  children: React$Node
};

const Body = (props: PropsType) => {
  const { children } = props;
  return (
    <Col md={12}>
      <h2 className="text-center lead">{children}</h2>
    </Col>
  );
};

export default Body;
