/* @flow */
import React from 'react';
import { Button, Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';
import data from 'DATA/commons/Solutions/SolutionsData.js';

const Hospitality = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md={6} lg={5} className="text-center text-md-left order-md-last pb-1 pb-md-0 px-0 px-sm-3 pr-md-0 pl-md-1 pl-lg-3">
        <Polygon />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0 order-md-first">
        <Solution.Item title={data.Airlines.title}>
          {data.Airlines.text}
        </Solution.Item>
        {/*        <Button
          href="https://github.com/windingtree/"
          variant="accent"
          className="accent mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1"
        >
          Apply for integration
        </Button> */}
        <Button
          href="#usecases"
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
