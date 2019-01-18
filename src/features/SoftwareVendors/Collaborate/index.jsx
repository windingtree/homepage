// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';

import Card from 'commons/Card';
import cardsData from './data';

const Collaborate = () => (
  <section className="app-section section-collaborate">
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="mb-2 mb-md-4 text-center">
            <p className="lead mb-1 mb-md-2">
              Join the first open marketplace for travel. Create solutions for the vibrant ecosystem
              of travel suppliers and sellers using open APIs and free and open-source examples.
            </p>
            <Button
              href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform"
              variant="dark"
              outlined
            >
              Collaborate
            </Button>
          </div>
          <p className="mb-1 mb-md-2 text-center text-md-left">
            If you are a supplier or a seller developing own software, you are in a right way!
            Integration with winding tree can force your business, make it more profitable and
            rapid. Check our docs or go to sellers or suppliers section to learn more.
          </p>
          <CardDeck>
            {cardsData.map(card => (
              <Card {...card} key={`about-card-${card.title}`} />
            ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Collaborate;
