// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';

class AccentedTextSection extends React.Component  {

  render() {
    const { data } = this.props;
    return (
      <div className="app-section section-about pb-0" id="about">
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <h2 className="my-3 mb-md-4 text-center">
                {data.header}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <p className="lead mb-2 mb-md-4 text-center">
                {data.text}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AccentedTextSection;
