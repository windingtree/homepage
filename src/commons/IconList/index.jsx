/* @flow */
import React from 'react';
import icons from 'DATA/commons/IconList/IconListData.js';

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
          <a href={icon.href} title={icon.title} className={`text-${variant} text-alpha-inverse`} target="_blank" rel="noopener noreferrer">
            <i className={`mdi mdi-${size}px ${icon.className}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
