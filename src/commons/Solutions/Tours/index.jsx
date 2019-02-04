/* @flow */
import React from 'react';
import { Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';
import data from 'DATA/commons/Solutions';

const Tours = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md={6} lg={5} className="text-center text-md-left pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Polygon />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0">
        <Solution.Item title={data.Tours.title}>
          {data.Tours.text}
        </Solution.Item>
        {/*        <Button
          href="https://github.com/windingtree/"
          className="mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1"
          variant="accent"
        >
          Contact our team
        </Button> */}
        {/* <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform"
          variant="dark"
          outlined
        >
          Use cases
        </Button> */}
      </Col>
    </Row>
  </Solution>
);

export default Tours;
