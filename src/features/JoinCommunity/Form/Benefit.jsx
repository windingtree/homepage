/* @flow */
import React from 'react';
import { Col, Image } from '@windingtree/wt-ui-react';

type PropsType = {
  title: string,
  icon: string
};

const Benefit = (props: PropsType) => {
  const { title, icon } = props;
  return (
    <div className="text-center">
      <Image src={icon} alt={title} fluid width="100" />
      <h4 className="my-1 mt-md-2 mb-md-1">{title}</h4>
    </div>
  );
};

export default Benefit;
