/* @flow */
import React from 'react';

type PropsType = {
  children: React$Node
};

const Body = (props: PropsType) => {
  const { children } = props;
  return (<p className="small text-muted">{children}</p>);
};

export default Body;
