/* @flow */
import React from 'react';

type PropsType = {
  text: string,
  href: string
};

const Copyright = ({ text, href }: PropsType) => (
  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-baseline">
    <small>
©&nbsp;2017–
      <script>document.write(new Date().getFullYear());</script>
2019, Winding Tree
    </small>
    <a href={href} target="_blank" rel="noopener noreferrer" className="ml-md-2 small text-white text-alpha-inverse border-bottom">{text}</a>
  </div>
);

export default Copyright;
