/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/7.svg';

const PersonlizedTravel = () => (
  <Benefit>
    <Image src={Icon} alt="Personalized Travel" fluid />
    <Benefit.Title>Personalized Travel</Benefit.Title>
    <Benefit.Body>
      Provide more personalized service to your customer based on their travel history,
      that they can securely share with you.
    </Benefit.Body>
  </Benefit>
);

export default PersonlizedTravel;
