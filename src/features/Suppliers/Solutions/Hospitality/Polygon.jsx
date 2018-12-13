/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import hospitality from './img/hospitality.jpg';

const SVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="520" height="330" viewBox="0 0 520 330" className="d-none d-md-block">
    <defs>
      <polygon id="bitmap-1-a" points="0 227.35 150.512 330 520 116.074 331.367 0 44.344 38.388" />
      <linearGradient id="bitmap-1-c" x1="50%" x2="50%" y1="20.792%" y2="100%">
        <stop offset="0%" stopColor="#29CB96" />
        <stop offset="100%" stopColor="#5F2987" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bitmap-1-b" fill="#fff">
        <use xlinkHref="#bitmap-1-a" />
      </mask>
      <use fill="#000" xlinkHref="#bitmap-1-a" />
      <image width="520" height="330" mask="url(#bitmap-1-b)" xlinkHref={hospitality} />
      <rect width="520" height="330" fill="url(#bitmap-1-c)" mask="url(#bitmap-1-b)" opacity=".702" style={{ mixBlendMode: 'darken' }} />
    </g>
  </svg>
);

export default SVG;
