/* stylelint-disable declaration-block-trailing-semicolon */
/* @flow */
import React from 'react';
import data from 'DATA/commons/Solutions/SolutionsData.js';

const SVG = () => (
  <svg
    viewBox="0 0 432 319"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ maxWidth: '100%' }}
  >
    <mask
      id="mask0"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="432"
      height="319"
    >
      <rect width="432" height="319" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M318.025 285.144L426.432 151.297L282.503 5.6369L53.1591 55.6745L2.84408 155.16L136.294 312.731L318.025 285.144Z"
        fill="#D8D8D8"
      />
      <mask
        id="maskt1"
        maskUnits="userSpaceOnUse"
        x="-34"
        y="-77"
        width="490"
        height="474"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M318.025 285.144L426.432 151.297L282.503 5.6369L53.1591 55.6745L2.84408 155.16L136.294 312.731L318.025 285.144Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#maskt1)">
        <rect
          width="650"
          height="477"
          transform="matrix(-1 0 0 1 658 -54)"
          fill="url(#patternt0)"
        />
        <rect
          x="-25"
          y="-18"
          width="461"
          height="355"
          fill="url(#paintt0_linear)"
          style={{ mixBlendMode: 'darken' }}
          opacity="0.697"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="patternt0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#imaget0" transform="scale(.00067 .0009)" />
      </pattern>
      <linearGradient
        id="paintt0_linear"
        x1="6.245"
        y1="30.122"
        x2="6.245"
        y2="337"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29CB96" />
        <stop offset="1" stopColor="#0D1134" />
      </linearGradient>
      <image id="imaget0" width="1500" height="1102" xlinkHref={data.OTA.imgSrc} />
    </defs>
  </svg>
);

export default SVG;
