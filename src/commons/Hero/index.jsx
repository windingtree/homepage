/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Row, Col, Button, Image,
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
            <h1 className="h2 text-white">{heroData.title}</h1>
            <p className="lead text-white text-sm-lg">{heroData.text}</p>
            { heroData.primaryButtonHref && heroData.primaryButtonLabel && (
              <LinkContainer to={heroData.primaryButtonHref}>
                <Button variant="primary" className="mt-0 mt-lg-1 mr-lg-1 mr-lg-1" target="_blank">
                  {heroData.primaryButtonLabel}
                </Button>
              </LinkContainer>
            ) }
            <div className="pb-1 d-md-none" />
            { heroData.SecondaryButtonHref && heroData.SecondaryButtonLabel && (
              <LinkContainer to={heroData.SecondaryButtonHref}>
                <Button outlined variant="light" className="mt-0 mt-lg-1" target="_blank">{heroData.SecondaryButtonLabel}</Button>
              </LinkContainer>
            )}
          </Col>
          <Col lg={4} className="text-center d-none d-lg-inline">
            <Image fluid src={heroData.imgSrc} />
          </Col>
        </Row>

      </Container>
    </article>
  );
};

export default Hero;
