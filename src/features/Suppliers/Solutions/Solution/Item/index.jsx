/* @flow */
import React from 'react';

type PropsType = {
    children: React$Node,
    title: string
};

const SolutionItem = (props: PropsType) => {
  const { title, children } = props;
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p className="mb-2">{children}</p>
    </React.Fragment>
  );
};

SolutionItem.defaultProps = {
  inverted: false,
};

export default SolutionItem;
