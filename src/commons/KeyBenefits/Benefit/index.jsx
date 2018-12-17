/* @flow */
import React from 'react';
import { Col, Image } from '@windingtree/wt-ui-react';

type PropsType = {
  title: string,
  body: string,
  img: string
};

const Benefit = (props: PropsType) => {
  const { title, body, img } = props;
  return (
    <Col md={6} className="my-2 mt-md-4 mb-md-0 pr-md-3 text-center">
      <Image src={img} alt={title} fluid />
      <h6 className="my-1 mt-md-2 mb-md-1">{title}</h6>
      <p className="muted">{body}</p>
    </Col>
  );
};

export default Benefit;
