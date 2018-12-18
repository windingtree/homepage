/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import hospitality from './img/hospitality.jpg';

const SVG = () => (
  <svg
    viewBox="0 0 422 318"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ maxWidth: '100%' }}
  >
    <mask
      id="maskh0"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="422"
      height="318"
    >
      <rect width="422" height="318" fill="#C4C4C4" />
    </mask>
    <g mask="url(#maskh0)">
      <mask
        id="maskh1"
        maskUnits="userSpaceOnUse"
        x="-37"
        y="-74"
        width="490"
        height="474"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M315.025 288.144L423.432 154.297L279.503 8.6369L50.1591 58.6745L-0.155916 158.16L133.294 315.731L315.025 288.144Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#maskh1)">
        <rect
          width="544"
          height="355"
          transform="matrix(-1 0 0 1 485 -15)"
          fill="url(#patternh0)"
        />
        <rect
          y="9"
          width="424"
          height="307"
          fill="url(#painth0_linear)"
          style={{
            mixBlendMode: 'darken',
          }}
          opacity="0.697"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="patternh0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#imageHospitality"
          transform="scale(.00098 .0015)"
        />
      </pattern>
      <linearGradient
        id="painth0_linear"
        x1="28.738"
        y1="50.615"
        x2="28.738"
        y2="316"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29CB96" />
        <stop offset="1" stopColor="#0D1134" />
      </linearGradient>
      <image
        id="imageHospitality"
        width="1023"
        height="669"
        xlinkHref={hospitality}
      />
    </defs>
  </svg>
);

export default SVG;
