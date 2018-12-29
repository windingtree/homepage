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
        <Nav.Item as={Col} md={3}>
          <Nav.Link eventKey={collaborator.title}>
            <Image fluid src={collaborator.imgSrc} alt={collaborator.title} />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    <Tab.Content className="px-2 py-3">
      {collaborators.map(collaborator => (
        <Tab.Pane eventKey={collaborator.title}>
          <blockquote className="blockquote blockquote-alt mb-0" key={collaborator.title}>
            <p className="blockquote-body p-0">
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
