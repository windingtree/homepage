/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/8.svg';

const PaymentsOnPlatform = () => (
  <Benefit>
    <Image src={Icon} alt="Payments on the Platform" fluid />
    <Benefit.Title>Payments on the Platform</Benefit.Title>
    <Benefit.Body>
      In order for an agency (offline or online) to book anything on the Winding Tree platform
      they will have to send a certain amount of Líf to the seller. The miner fees are also
      paid in Líf.
    </Benefit.Body>
  </Benefit>
);

export default PaymentsOnPlatform;
