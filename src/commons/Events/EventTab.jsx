/* @flow */
import React from 'react';
import { Tab, Pagination } from '@windingtree/wt-ui-react';
import Accordion from 'commons/Accordion';
import Event from 'DATA/commons/Events';
import type { EventType } from 'DATA/commons/Events';

type PropsType = {
  name: string,
  events: EventType[],
  eventsPerPage: number
};

type StateType = {
  activePage: number,
  maxPages: number
};

class EventTab extends React.Component<PropsType, StateType> {
  state = {
    maxPages: 1,
    activePage: 1,
  }

  static defaultProps = {
    eventsPerPage: 5,
  };

  componentWillMount() {
    const { events, eventsPerPage } = this.props;
    const maxPages = Math.ceil(events.length / eventsPerPage);
    this.setState({
      maxPages,
    });
  }

  handlePaginationClick = (nextPage: number) => {
    this.setState({
      activePage: nextPage,
    });
  }

  render() {
    const { name, events, eventsPerPage } = this.props;
    const { maxPages, activePage } = this.state;
    const pageItems = [];
    for (let number = 1; number <= maxPages; number += 1) {
      pageItems.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => { this.handlePaginationClick(number); }}
        >
          {number}
        </Pagination.Item>,
      );
    }
    const initialEvent = (activePage - 1) * eventsPerPage;
    const eventsInPage = events.slice(initialEvent, initialEvent + eventsPerPage);
    return (
      <Tab.Pane eventKey={name} className="pb-2">
        <Accordion minHeight={100} openItem={0}>
          {eventsInPage.map(event => (
            <Event {...event} key={event.name} />
          ))}
        </Accordion>
        <Pagination className="justify-content-center pt-1" size="lg">
          {pageItems}
        </Pagination>
      </Tab.Pane>
    );
  }
}

export default EventTab;
