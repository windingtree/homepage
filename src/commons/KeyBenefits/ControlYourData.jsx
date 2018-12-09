/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/4.svg';

const ControlYourData = () => (
  <Benefit>
    <Image src={Icon} alt="Control Your Data" fluid />
    <Benefit.Title>Control Your Data</Benefit.Title>
    <Benefit.Body>
      Winding Tree puts suppliers, sellers and travelers in control of their own data. You can
      determine who sees your inventory and create different rules for different partners.
    </Benefit.Body>
  </Benefit>
);

export default ControlYourData;
