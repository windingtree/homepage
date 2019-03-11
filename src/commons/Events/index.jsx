/* @flow */
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import defaultEventItems from 'DATA/commons/Events';
import EventTabs from './EventTabs';


const Events = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>

      <section className="app-section section-events">
        <Container>
          <header>
            <Row>
              <Col md={12} className="text-center mb-2">
                <h2>{data.header}</h2>
              </Col>
            </Row>
          </header>
          <Row id="Events" className="justify-content-center">
            <Col md={10}>
              <EventTabs events={data.items} activeTab={data.activeTab} />
              <footer className="alert alert-accent-light text-center px-1">
                <p className="d-block d-lg-inline mr-0 mr-lg-2">{data.text}</p>
                <Button variant="primary" href={data.ctaLink}>{data.ctaLabel}</Button>
              </footer>
            </Col>
          </Row>
        </Container>
      </section>
    </ScrollableAnchor>
  );
};


Events.defaultProps = {
  id: 'events',
  data: {
    header: 'Where to meet our team',
    text: 'If you want to invite Winding Tree to you event please send us an email',
    ctaLink: 'mailto:info@windingtree.com',
    ctaLabel: 'Send Email',
    activeTab: 'Upcoming',
    items: defaultEventItems,
  },
};

export default Events;
