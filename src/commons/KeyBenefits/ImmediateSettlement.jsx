/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/3.svg';

const ImmediateSettlement = () => (
  <Benefit>
    <Image src={Icon} alt="Immediate Settlement" fluid />
    <Benefit.Title>Immediate Settlement</Benefit.Title>
    <Benefit.Body>
      {
        `Don't wait for weeks for a third-party to send you your money. Use different smart
        contracts for different settlement strategies and receive your payment, regardless of
        where you are, within seconds.`
      }
    </Benefit.Body>
  </Benefit>
);

export default ImmediateSettlement;
