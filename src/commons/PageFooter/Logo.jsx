/* @flow */
import React from 'react';

const Logo = (props: *) => {
  const { data } = props;
  return (
    <div className="col-md-4">
      <img src={data.LogoSm.img} alt={data.LogoSm.alt} className="d-md-none mb-2" />
      <img src={data.LogoMd.img} height="60" alt={data.LogoMd.alt} className="d-none d-md-inline" />
    </div>
  );
};

export default Logo;
