/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import airlines from './img/airlines.jpg';

const SVG = () => (
  <svg
    viewBox="0 0 434 325"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ maxWidth: '100%' }}
  >
    <mask
      id="maska0"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="434"
      height="325"
    >
      <rect width="434" height="325" fill="#C4C4C4" />
    </mask>
    <g mask="url(#maska0)">
      <mask
        id="maska1"
        maskUnits="userSpaceOnUse"
        x="-25"
        y="-74"
        width="490"
        height="474"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.975 288.144L4.56846 154.297L148.497 8.6369L377.841 58.6745L428.156 158.16L294.706 315.731L112.975 288.144Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#maska1)">
        <rect
          x="-4"
          y="-1"
          width="527"
          height="339"
          fill="url(#patterna0)"
        />
        <rect
          x="-77"
          y="-14"
          width="503"
          height="331"
          fill="url(#patterna1)"
        />
        <rect
          x="-16"
          y="-15"
          width="461"
          height="355"
          fill="url(#painta0_linear)"
          style={{ mixBlendMode: 'darken' }}
          opacity="0.697"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="patterna1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#imageAirlines"
          transform="scale(.00067 .00101)"
        />
      </pattern>
      <linearGradient
        id="painta0_linear"
        x1="15.245"
        y1="33.122"
        x2="15.245"
        y2="340"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29CB96" />
        <stop offset="1" stopColor="#0D1134" />
      </linearGradient>
      <image
        id="imageAirlines"
        width="1500"
        height="986"
        xlinkHref={airlines}
      />
    </defs>
  </svg>
);

export default SVG;
