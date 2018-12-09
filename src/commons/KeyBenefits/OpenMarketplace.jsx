/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/5.svg';

const OpenMarketplace = () => (
  <Benefit>
    <Image src={Icon} alt="Open Marketplace" fluid />
    <Benefit.Title>Open Marketplace </Benefit.Title>
    <Benefit.Body>
      Get access to thousands of suppliers with one integration. Transportation, accommodation,
      ancillary - we have it all!
    </Benefit.Body>
  </Benefit>
);

export default OpenMarketplace;
