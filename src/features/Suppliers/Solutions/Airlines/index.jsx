/* @flow */
import React from 'react';
import Solution from '../Solution';
import imgSrc from './img/airlines.jpg';
import Icon from './img/anz.png';
import Polygon from './Polygon';
import Benefits from './Benefits';

const Hospitality = () => (
  <Solution>
    <Solution.Header title="Airlines">
      <Polygon />
      <Solution.Header.Image src={imgSrc} alt="Airlines" />
      <Solution.Header.Body title="Airlines">
        Lower your distribution and transactional cost by using new commission-free distribution
        channel, more reliable than any major GDS.
      </Solution.Header.Body>
    </Solution.Header>
    <Solution.Case
      imgSrc={Icon}
      imgAlt="Air New Zeland"
      href="https://www.airnewzealand.eu/"
    >
      Making the sales process less complex, Air New Zealand customers can benefit from reduced
      transactional costs, while the airline can take advantage of the swift and secure sharing
      of information.
    </Solution.Case>
    <Benefits />
    <Solution.Footer CTA="READ DOCUMENTATION">
      If you would like to start selling your inventory on the Winding Tree platform, we recommend
      you to read the integration documentation and then arrange for a consultation.
    </Solution.Footer>
  </Solution>
);

export default Hospitality;
