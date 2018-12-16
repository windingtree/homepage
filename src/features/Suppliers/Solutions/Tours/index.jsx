/* @flow */
import React from 'react';
import { Button, Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';

const Tours = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md="6" lg="5" className="text-center text-md-left pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Polygon />
      </Col>
      <Col md="6" lg="7" className="mb-1 mb-sm-0">
        <Solution.Item title="Tours, Activities, Rentals, Cruises">
                    Join the conversation and contribute development to tours
                    and activities, trains and car rentals.
        </Solution.Item>
        <Button
          href="https://github.com/windingtree/"
          className="btn-accent mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1 d-block d-sm-inline-block"
        >
                    Apply for integration
        </Button>
        <Button
          href="https://github.com/windingtree/"
          className="btn-outline-dark d-block d-sm-inline-block"
        >
                    Use cases
        </Button>
      </Col>
    </Row>
  </Solution>
);

export default Tours;
