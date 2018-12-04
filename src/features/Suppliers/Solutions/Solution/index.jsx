/* @flow */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SolutionCase from './SolutionCase';

type PropsType = {
  children: React$Node
};
const Solution = (props: PropsType) => {
  const { children } = props;
  return (
    <div className="solutions__sections mb-4 mb-md-5">
      {children}
    </div>
  );
};

Solution.Header = Header;
Solution.Footer = Footer;
Solution.Case = SolutionCase;

export default Solution;
