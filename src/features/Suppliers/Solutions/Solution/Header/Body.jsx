/* @flow */
import React from 'react';

type PropsType = {
  title: string,
  children: React$Node
};

const Body = (props: PropsType) => {
  const {
    title, children,
  } = props;
  return (
    <div className="px-1 px-md-0">
      <h3 className="mb-1 text-muted">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Body;
