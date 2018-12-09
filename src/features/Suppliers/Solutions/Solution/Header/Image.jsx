/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';

type PropsType = {
  src: string,
  alt: string
};

const HeaderImage = (props: PropsType) => {
  const { src, alt } = props;
  return (
    <div className="solutions__overlay d-md-none mb-2">
      <Image src={src} alt={alt} fluid className="rounded-top" />
    </div>
  );
};

export default HeaderImage;
