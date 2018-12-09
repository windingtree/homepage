/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import airlines from './img/airlines.jpg';

const SVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="520" height="330" viewBox="0 0 520 330" className="d-none d-md-block">
    <defs>
      <polygon id="bitmap-2-a" points="54.915 330 0 169.672 153.16 0 520 91.637 481.019 211.646" />
      <linearGradient id="bitmap-2-c" x1="50%" x2="50%" y1="20.792%" y2="100%">
        <stop offset="0%" stopColor="#29CB96" />
        <stop offset="100%" stopColor="#5F2987" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bitmap-2-b" fill="#fff">
        <use xlinkHref="#bitmap-2-a" />
      </mask>
      <use fill="#000" xlinkHref="#bitmap-2-a" />
      <image width="520" height="330" mask="url(#bitmap-2-b)" xlinkHref={airlines} />
      <rect width="520" height="330" fill="url(#bitmap-2-c)" mask="url(#bitmap-2-b)" opacity=".702" style={{ mixBlendMode: 'darken' }} />
    </g>
  </svg>
);

export default SVG;
