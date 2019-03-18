/* @flow */
import React from 'react';
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
          <Row className="align-items-center">
            <Col lg={8} className="text-center text-lg-left">
              <h2 className="text-white">{data.title}</h2>
              <p className="mb-1 lead text-white text-sm-lg">{data.text}</p>
              {data.icons && <IconList variant="white" size={48} />}
            </Col>
            <Col lg={4} className="text-center">
              <i className={`mdi mdi-xxl ${data.mdiIcon} text-white d-none d-lg-inline`} />
              { data.href
                ? (<Button outlined variant="light" className="mt-1 mt-lg-2 " href={data.href}>{data.buttonLabel}</Button>)
                : '' }
            </Col>
          </Row>
        </Container>
      </article>

    </ScrollableAnchor>
  );
};

export default Banner;
