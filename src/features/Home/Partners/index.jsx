// @flow
import React from 'react';
import {
  Container, Button,
} from '@windingtree/wt-ui-react';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Slicks from './Slicks';

const Partners = () => (
  <Container className="app-section">
    <h2 className="mb-2 mb-md-4 text-center">Partners</h2>
    <PartnersAndContributors />
    <Slicks />
    <Container>
      <footer className="text-center">
        <Button
          href="mailto:partners@windingtree.com"
          variant="dark"
          outlined
        >
          BECOME PARTNER
        </Button>
      </footer>
    </Container>
  </Container>
);

export default Partners;
