/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/8.svg';

const PlatformGovernance = () => (
  <Benefit>
    <Image src={Icon} alt="Platform Governance" fluid />
    <Benefit.Title>Platform Governance</Benefit.Title>
    <Benefit.Body>
      Because Winding tree is open-source, anyone can propose a change to the platform code,
      perhaps in order to update a smart contract with some new business logic. But because
      the marketplace is decentralized, its participants have to approve that change.
    </Benefit.Body>
  </Benefit>
);

export default PlatformGovernance;
