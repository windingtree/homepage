/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import astronaut from './astronaut.png';

const SVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="520" height="330" viewBox="0 0 520 330" className="d-none d-md-block">
    <defs>
      <polygon id="bitmap-3-a" points="0 118.08 128.069 330 478.528 211.982 520 146.057 184.505 0" />
      <linearGradient id="bitmap-3-c" x1="50%" x2="50%" y1="20.792%" y2="100%">
        <stop offset="0%" stopColor="#29CB96" />
        <stop offset="100%" stopColor="#5F2987" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bitmap-3-b" fill="#fff">
        <use xlinkHref="#bitmap-3-a" />
      </mask>
      <use fill="#000" xlinkHref="#bitmap-3-a" />
      <image width="520" height="330" mask="url(#bitmap-3-b)" xlinkHref={astronaut} />
      <rect width="520" height="330" fill="url(#bitmap-3-c)" mask="url(#bitmap-3-b)" opacity=".702" style={{ mixBlendMode: 'darken' }} />
    </g>
  </svg>
);

export default SVG;
