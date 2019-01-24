/* @flow */
import React from 'react';

type PropsType = {
  img: string,
  name: string
};

const DevImage = (props: PropsType) => {
  const { img, name } = props;
  return (
    <div className="devs-marquee-dev">
      <svg className="devs-marquee-dev-img" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <mask id="mask2" fill="white">
            <path d="M26.76,0a7.17,7.17,0,0,0-3.41,1L3.41,12.58A6.62,6.62,0,0,0,0,18.39V41.61a6.72,6.72,0,0,0,3.41,5.81L23.35,59a7.4,7.4,0,0,0,3.41,1,7.9,7.9,0,0,0,3.89-1L50.59,47.42A6.76,6.76,0,0,0,54,41.61V18.39a6.66,6.66,0,0,0-3.41-5.81L30.65,1A7.7,7.7,0,0,0,26.76,0Z" id="path2" />
          </mask>
          <image mask="url(#mask2)" width="60" height="60" xlinkHref={img} />
        </g>
      </svg>
      <p className="devs-marquee-dev-name">{name}</p>
    </div>
  );
};

export default DevImage;
