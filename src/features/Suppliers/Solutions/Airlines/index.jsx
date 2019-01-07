/* @flow */
import React from 'react';
import { Button, Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';

const Hospitality = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md={6} lg={5} className="text-center text-md-left order-md-last pb-1 pb-md-0 px-0 px-sm-3 pr-md-0 pl-md-1 pl-lg-3">
        <Polygon />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0 order-md-first">
        <Solution.Item title="For Airlines">
          Lower your distribution and transactional cost by using new
          commission-free distribution channel, more reliable than any
          major GDS.
        </Solution.Item>
{/*        <Button
          href="https://github.com/windingtree/"
          variant="accent"
          className="accent mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1 d-block d-sm-inline-block"
        >
          Apply for integration
        </Button>*/}
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform"
          className="d-block d-sm-inline-block"
          variant="dark"
          outlined
        >
          Use cases
        </Button>
      </Col>
    </Row>
  </Solution>
);

export default Hospitality;
