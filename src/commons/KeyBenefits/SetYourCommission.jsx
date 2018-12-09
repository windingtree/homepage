/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/3.svg';

const SetYourCommission = () => (
  <Benefit>
    <Image src={Icon} alt="Set your commision" fluid />
    <Benefit.Title>Set Youe Commission</Benefit.Title>
    <Benefit.Body>
      Get wholesale rates from suppliers and set your own commission for your services.
    </Benefit.Body>
  </Benefit>
);

export default SetYourCommission;
