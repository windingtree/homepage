/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/1.svg';

const NetworkWithoutBorders = () => (
  <Benefit>
    <Image src={Icon} alt="Network Without Borders" fluid />
    <Benefit.Title>Network Without Borders</Benefit.Title>
    <Benefit.Body>
      We designed the Winding Tree network to be the easiest to integrate with. It means that you
      are joining a vibrant fast-growing ecosystem of suppliers and sellers as well.
    </Benefit.Body>
  </Benefit>
);

export default NetworkWithoutBorders;
