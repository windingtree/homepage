/* @flow */
import React from 'react';
import Solution from '../Solution';
import imgSrc from './astronaut.png';
import Polygon from './Polygon';
import Integrated from './Integrated';

const Hospitality = () => (
  <Solution>
    <Solution.Header title="Tour and Activity Providers, Trains, Car Rental, Cruises">
      <Polygon />
      <Solution.Header.Image src={imgSrc} alt="Tour and Activity Providers, Trains, Car Rental, Cruises" />
      <Solution.Header.Body title="Tour and Activity Providers, Trains, Car Rental, Cruises">
        Join the conversation and contribute development to tours and activities, trains and car
        rentals.
      </Solution.Header.Body>
    </Solution.Header>
    <Integrated />
    <Solution.Footer CTA="GO TO API">
      Please contact our partners that have integrated with the Winding Tree platform. You may
      also use our API or one of the libraries in order to integrate with Winding Tree directly.
    </Solution.Footer>
  </Solution>
);

export default Hospitality;
