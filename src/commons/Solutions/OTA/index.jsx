/* @flow */
import React from 'react';
import { Button, Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';

const OTA = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md={6} lg={5} className="text-center text-md-left pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Polygon />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0">
        <Solution.Item title="Online and Offline Travel Agency">
          If you sell travel as an agency, through your site or would like to add booking of travel to your app, you can integrate with Winding Tree and access suppliers directly through our API without any commission fees or mediation by Winding Tree.
        </Solution.Item>
        <Button
          href="https://github.com/windingtree/wiki"
          className="mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1 d-block d-sm-inline-block"
          variant="accent"
        >
          Check API
        </Button>
        <Button
          href="#usecases"
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

export default OTA;
