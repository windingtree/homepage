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
    <Col md={6} className="text-center">
      <Image src={img} alt={title} fluid width="100" />
      <h3 className="my-1 mt-md-2 mb-md-1">{title}</h3>
      <p className="text-lg pb-2 pb-md-5 px-3">{body}</p>
    </Col>
  );
};

export default Benefit;
