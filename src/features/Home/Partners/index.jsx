// @flow
import React from 'react';
import {
  Container,
} from '@windingtree/wt-ui-react';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Slicks from './Slicks';

const Partners = () => (
  <Container className="app-section">
    <h2 className="mb-2 mb-md-4 text-center">Partners</h2>
    <PartnersAndContributors />
    <Slicks />
  </Container>
);

export default Partners;
