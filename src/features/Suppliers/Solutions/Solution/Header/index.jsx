/* @flow */
import React from 'react';
import {
  Row, Col,
} from '@windingtree/wt-ui-react';
import Body from './Body';
import Image from './Image';

type PropsType = {
  children: React$Node
};

const SolutionHeader = (props: PropsType) => {
  const { children } = props;
  return (
    <header className="solutions__header px-md-5 pt-md-2 pb-4 rounded text-center text-md-left">
      <Row>
        <Col md={7}>
          {children}
        </Col>
      </Row>
    </header>
  );
};

SolutionHeader.defaultProps = {
  inverted: false,
};

SolutionHeader.Image = Image;
SolutionHeader.Body = Body;

export default SolutionHeader;
