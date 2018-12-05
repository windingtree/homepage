/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/6.svg';

const NoFakeReviews = () => (
  <Benefit>
    <Image src={Icon} alt="No Fake Reviews" fluid />
    <Benefit.Title>No Fake Reviews</Benefit.Title>
    <Benefit.Body>
      As the blockchain makes stored information permanently valid, travel market players can
      validate not only bookings, but also plenty of other info e.g. whether a feedback for a
      hotel was left by a person who had really stayed there.
    </Benefit.Body>
  </Benefit>
);

export default NoFakeReviews;
