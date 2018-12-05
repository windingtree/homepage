/* @flow */
import React from 'react';

type PropsType = {
  children: React$Node
};

const Title = (props: PropsType) => {
  const { children } = props;
  return (<h6 className="my-1 mt-md-2 mb-md-1">{children}</h6>);
};

export default Title;
