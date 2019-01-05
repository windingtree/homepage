/* @flow */
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import data from './data';

type PropsType = {
  variant: 'foundation' | 'hackTravel' | 'lifToken' | 'sellers' | 'softwareVendors' | 'startupsAndDevelopers' | 'suppliers'
};

const Hero = (props: PropsType) => {
  const { variant } = props;
  const heroData = data[variant];
  return (
    <article className="app-section bg-grad">
      <Container>
        <Row className="align-items-center" flex>
          <Col lg={8} className="mb-1 mb-md-0 text-center text-lg-left">
            <h2 className="text-white">{heroData.title}</h2>
            <p className="lead text-white text-sm-lg">{heroData.text}</p>
            { heroData.primaryButtonHref && <Button href={heroData.primaryButtonHref} variant="primary" className="mt-0 mt-lg-1 mr-1 mr-lg-1" target="_blank">{heroData.primaryButtonLabel}</Button> }
            { heroData.SecondaryButtonHref && <Button outlined href={heroData.SecondaryButtonHref} variant="light" className="mt-0 mt-lg-1" target="_blank">{heroData.SecondaryButtonLabel}</Button> }
          </Col>
          <Col lg={4} className="text-center">
            <i className={`mdi mdi-xxl ${heroData.mdiIcon} text-white d-none d-lg-inline`} />
          </Col>
        </Row>

      </Container>
    </article>
  );
};

export default Hero;
