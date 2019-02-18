/* @flow */
import React from 'react';
import {
  Row, Container, Col
} from '@windingtree/wt-ui-react';
import { comunityBenefits } from 'DATA/features/JoinCommunity/Form';
import Benefit from './Benefit';

const Header = () => (
  <Container>
    <Row className="justify-content-center">
      {comunityBenefits.map(benefit => (
        <Col xs={4}>
            <Benefit {...benefit} key={benefit.title} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Header;
