/* @flow */
import React from 'react';
import Icon from './Icon';
import './max.jpg';

type PropsType = {
  body: string,
  name: string,
  role: string,
  img: string
};

const Solutions = (props: PropsType) => {
  const {
    body, name, role, img,
  } = props;
  return (
    <blockquote className="blockquote mb-0">
      <p className="blockquote-body">
        <i className="mdi mdi-36px mdi-format-quote-open" />
        {body}
        <i className="mdi mdi-36px mdi-format-quote-close" />
      </p>
      <footer className="blockquote-footer">
        <div className="user">
          <Icon img={img} />
          <div className="user-data">
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>
          </div>
        </div>
      </footer>
    </blockquote>
  );
};

export default Solutions;
