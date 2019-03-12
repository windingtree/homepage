/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ImgLeftSection from 'commons/ImgLeftSection';
import ImgRightSection from 'commons/ImgRightSection';

const SolutionsSection = (props: *) => {
  const { id, data, children } = props;
  return (
    <>
      <ScrollableAnchor id={id}>

        <section className="app-section section-key-benefits pb-0">
          <Container>
            <Row>
              <Col md={12} className="text-center mb-2">
                <h2>{data.header}</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={12} lg={10}>
                <Row>
                  {data.items.map((benefit, index) => {
                    const counter = index % 2;
                    if (counter === 0) {
                      return (<ImgLeftSection data={benefit} key={benefit.title} />);
                    }
                    return (<ImgRightSection data={benefit} key={benefit.title} />);
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

      </ScrollableAnchor>

      {children}
    </>
  );
};

export default SolutionsSection;
