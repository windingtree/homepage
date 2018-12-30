/* @flow */
import React from 'react';
import {
  Tab, Nav, Row,
} from '@windingtree/wt-ui-react';
import EventTab from './EventTab';
import events from './data';

const EventTabs = () => (
  <Tab.Container id="event-tabs" defaultActiveKey="Own">
    <Row>
      <Nav as="ul" className="mb-2">
        <Nav.Item as="li">
          <Nav.Link eventKey="Own">Own Events</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Upcoming">Upcoming Events</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Past">Past Events</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
    <Row>
      <Tab.Content>
        <EventTab events={events.own} name="Own" id="Own" />
        <EventTab events={events.upcoming} name="Upcoming" id="Upcoming" />
        <EventTab events={events.past} name="Past" id="Past" />
      </Tab.Content>
    </Row>
  </Tab.Container>
);

export default EventTabs;
