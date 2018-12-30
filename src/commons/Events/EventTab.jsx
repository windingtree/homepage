/* @flow */
import React from 'react';
import { Tab, Row } from '@windingtree/wt-ui-react';
import Accordion from 'commons/Accordion';
import Event from './Event';
import type { EventType } from './data';

type PropsType = {
  name: string,
  events: EventType[]
};

const EventTab = (props: PropsType) => {
  const { name, events } = props;
  return (
    <Tab.Pane eventKey={name}>
      <Row>
        <Accordion minHeight={100} openItem={0}>
          {events.map(event => (
            <Event {...event} />
          ))}
        </Accordion>
      </Row>
    </Tab.Pane>
  );
};

export default EventTab;