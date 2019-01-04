/* @flow */
import React from 'react';
import icons from './data';

type PropsType = {
  variant: 'white' | 'dark',
  size: number
};

const IconList = (props: PropsType) => {
  const {
    variant, size,
  } = props;
  return (
    <ul className="list-inline">
      {icons.map(icon => (
        <li className="list-inline-item" key={icon.href}>
          <a href={icon.href} tittle={icon.title} className={`text-${variant} text-alpha-inverse`}>
            <i className={`mdi mdi-${size}px ${icon.className}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
