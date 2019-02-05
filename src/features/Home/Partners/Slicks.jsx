// @flow
import React from 'react';
import {
  Slick, Image,
} from '@windingtree/wt-ui-react';
import {
  partnersSlide1, partnersSlide2, partnersSlide3,
} from 'DATA/features/Home/Partners';

const slickOptions = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  draggable: false,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 10000,
  touchMove: false,
  variableWidth: true,
};


const PartnerSlicks = () => (
  <div className="slider-partners mb-3">
    <Slick {...slickOptions} className="partners-marquee">
      {
        partnersSlide1.map(partner => (
          <Image
            className="partners-marquee-img"
            src={partner.imgSrc}
            alt={partner.name}
            key={partner.name}
          />
        ))
      }
    </Slick>
    <Slick {...slickOptions} rtl className="partners-marquee">
      {
        partnersSlide2.map(partner => (
          <Image
            className="partners-marquee-img"
            src={partner.imgSrc}
            alt={partner.name}
            key={partner.name}
          />
        ))
      }
    </Slick>
    <Slick {...slickOptions} className="partners-marquee">
      {
        partnersSlide3.map(partner => (
          <Image
            className="partners-marquee-img"
            src={partner.imgSrc}
            alt={partner.name}
            key={partner.name}
          />
        ))
      }
    </Slick>
  </div>
);

export default PartnerSlicks;
