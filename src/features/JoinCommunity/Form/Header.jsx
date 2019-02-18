/* @flow */
import React from 'react';
import {
  Row, Container,
} from '@windingtree/wt-ui-react';
import { comunityBenefits } from 'DATA/features/JoinCommunity/Form';
import Benefit from './Benefit';

const Header = () => (
  <Container>
    <Row className="justify-content-center mt-2">
      {comunityBenefits.map(benefit => (
        <Benefit {...benefit} key={benefit.title} />
      ))}
    </Row>
  </Container>
);

export default Header;
