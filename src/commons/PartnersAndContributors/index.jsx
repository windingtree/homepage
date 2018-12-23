/* @flow */
import React from 'react';
import {
  Tab, Nav, Col, Image,
} from '@windingtree/wt-ui-react';
import collaborators from './data';

type PropsType = {
  tab: number
};

const PartnersAndContributors = ({ tab }: PropsType) => (
  <Tab.Container id="collaborators tabs" defaultActiveKey={collaborators[tab].title}>
    <Nav className="nav-pointers" variant="tabs">
      {collaborators.map(collaborator => (
        <Nav.Item key={collaborator.title} as={Col} md={3}>
          <Nav.Link eventKey={collaborator.title} className="">
            <Image fluid src={collaborator.imgSrc} alt={collaborator.title} />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    <Tab.Content className="px-2 py-3 bg-white">
      {collaborators.map(collaborator => (
        <Tab.Pane key={collaborator.title} eventKey={collaborator.title}>
          <blockquote className="blockquote blockquote-alt" key={collaborator.title}>
            <p className="blockquote-body">
              {collaborator.text}
            </p>
          </blockquote>
        </Tab.Pane>
      ))}
    </Tab.Content>
  </Tab.Container>
);

PartnersAndContributors.defaultProps = {
  tab: 0,
};

export default PartnersAndContributors;
