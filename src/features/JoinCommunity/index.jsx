/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import JoinCommunityForm from './Form';

const JoinCommunity = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.joinCommunity} />
    <section className="app-section ">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md={10}>
            <h2 className="mb-1">Join Windingtree Community</h2>
            <p className="mb-1 mb-md-2">
              of Developers, startupers, and enthusiasts
            </p>
          </Col>
        </Row>
      </Container>
      <JoinCommunityForm />

    </section>

  </div>
);

export default JoinCommunity;
