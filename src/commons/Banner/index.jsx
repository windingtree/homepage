/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import IconList from 'commons/IconList';
import ScrollableAnchor from 'react-scrollable-anchor';

const Banner = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>

      <article className="app-section section-banner bg-grad">
        <Container>
          <Row className="align-items-center" flex>
            <Col lg={8} className="text-center text-lg-left">
              <h2 className="text-white">{data.title}</h2>
              <p className="mb-1 lead text-white text-sm-lg">{data.text}</p>
              {data.icons && <IconList variant="white" size={48} />}
            </Col>
            <Col lg={4} className="text-center">
              <i className={`mdi mdi-xxl ${data.mdiIcon} text-white d-none d-lg-inline`} />
              { (data.href.startsWith('http')
                ? (<Button outlined variant="light" className="mt-0 mt-lg-1" href={data.href}>{data.buttonLabel}</Button>)
                : (
                  <LinkContainer to={data.href}>
                    <Button outlined variant="light" className="mt-0 mt-lg-1">{data.buttonLabel}</Button>
                  </LinkContainer>
                ))}
            </Col>
          </Row>
        </Container>
      </article>

    </ScrollableAnchor>
  );
};

export default Banner;
