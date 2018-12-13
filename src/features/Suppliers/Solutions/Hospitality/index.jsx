/* @flow */
import React from 'react';
import Solution from '../Solution';
import imgSrc from './img/hospitality.jpg';
import NordicIcon from './img/nordicIcon.jpg';
import Polygon from './Polygon';
import Integrated from './Integrated';

const Hospitality = () => (
  <Solution>
    <Solution.Header title="Airlines">
      <Polygon />
      <Solution.Header.Image src={imgSrc} alt="Hospitality" />
      <Solution.Header.Body title="Hospitality">
        Hotels can integrate with our simple APIs to showcase availability on the Winding Tree
        marketplace.
      </Solution.Header.Body>
    </Solution.Header>
    <Solution.Case
      imgSrc={NordicIcon}
      imgAlt="Nordic Choice Hotels"
      href="https://www.nordicchoicehotels.com/"
    >
      Nordic Choice Hotels is currently experimenting with the blockchain. Some of the rooms
      on Hobo have been made available on the blockchain platform Winding Tree, whose data
      can be used by third-party apps and sites that turn to the customers.
    </Solution.Case>
    <Integrated />
    <Solution.Footer CTA="INTEGRATE">
      {
        `Don't have your own tech team? No problem, check out our list of already integrated
        third parties or reach out and we'll walk you through your integration with Winding Tree.`
      }
    </Solution.Footer>
  </Solution>
);

export default Hospitality;
