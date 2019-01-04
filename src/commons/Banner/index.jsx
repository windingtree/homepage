/* @flow */
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import data from './data';

type PropsType = {
  variant: 'designedFor' | 'consultancy' | 'community'
};

const Banner = (props: PropsType) => {
  const {
    variant,
  } = props;
  const bannerData = data[variant];
  return (
    <article className="app-section bg-grad">
      <Container>
        <Row className="align-items-center" flex>
          <Col lg={8} className="mb-1 mb-md-0 text-center text-lg-left">
            <h2 className="text-white">{bannerData.title}</h2>
            <p className="lead text-white text-sm-lg">{bannerData.text}</p>
          </Col>
          <Col lg={4} className="text-center">
            <i className={`mdi mdi-xxl ${bannerData.mdiIcon} text-white d-none d-lg-inline`} />
            <Button outlined href={bannerData.href} variant="ligth" className="mt-0 mt-lg-1">{bannerData.buttonLabel}</Button>
          </Col>
        </Row>

      </Container>
    </article>
  );
};

export default Banner;
