/* @flow */
import React from 'react';
import Item from './Item';

type PropsType = {
    children: React$Node
};
const Solution = (props: PropsType) => {
  const { children } = props;
  return (
  // solution-item
    <div className="mb-3 mb-md-2">
      {children}
    </div>
  );
};

Solution.Item = Item;

export default Solution;
