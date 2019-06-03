/* @flow */
import React from 'react';
import {
  Tab, Nav,
} from '@windingtree/wt-ui-react';
import EventTab from './EventTab';

const EventTabs = (props: *) => {
  const { events, activeTab } = props;
  return (
    <Tab.Container id="event-tabs" defaultActiveKey={activeTab}>
      <Nav as="ul" className="mb-2 nav-tabs">
        <Nav.Item as="li">
          <Nav.Link eventKey="Upcoming">Upcoming Events</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Past">Past Events</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Own">Own Events</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <EventTab events={events.upcoming} name="Upcoming" id="Upcoming" />
        <EventTab events={events.past} name="Past" id="Past" />
        <EventTab events={events.own} name="Own" id="Own" />
      </Tab.Content>
    </Tab.Container>
  );
};

export default EventTabs;
