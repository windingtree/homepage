/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Lead from './Lead';
import Benefit from './Benefit';

type PropsType = {
  children: React$Node,
  noHeader: boolean
};

const KeyBenefits = (props: PropsType) => {
  const { children, noHeader } = props;
  const Header = noHeader
    ? null
    : (
      <header>
        <Row>
          <Col md={12} className="text-center mb-2">
            <h2>Key Benefits</h2>
          </Col>
        </Row>
      </header>
    );
  return (
    <section className="app-section section-key-benefits pb-0">
      <Container>
        {Header}
        <Row className="justify-content-center">
          <Col sm={12} lg={10}>
            <Row>
              {children}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

KeyBenefits.defaultProps = {
  noHeader: false,
};

KeyBenefits.Lead = Lead;
KeyBenefits.Benefit = Benefit;

export default KeyBenefits;
