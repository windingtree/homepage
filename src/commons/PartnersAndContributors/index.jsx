/* @flow */
import React from 'react';
import {
  Tab, Nav, Col, Image,
} from '@windingtree/wt-ui-react';
import partners from './data';

type PropsType = {
  tab: number
};

const PartnersAndContributors = ({ tab }: PropsType) => (
  <Tab.Container id="partners tabs" defaultActiveKey={partners[tab].name}>
    <Nav className="nav-pointers col-lg-12" variant="tabs">
      {partners.map(partner => (
        <Nav.Item as={Col} className="col-6 col-md-4 col-lg-2">
          <Nav.Link eventKey={partner.name} className="pb-1 pb-lg-2">
            <Image
              fluid
              src={partner.imgSrc}
              alt={partner.name}
              style={{
                maxWidth: partner.imgWidth,
                position: 'relative',
                top: partner.imgTopPosition,
              }}
            />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    <Tab.Content className="px-2 py-3 bg-white">
      {partners.map(partner => (
        <Tab.Pane eventKey={partner.name}>
          <blockquote className="blockquote blockquote-alt">
            <p className="blockquote-body">
              {partner.text}
              { partner.href && <a href={partner.href}>Read full article</a>}
            </p>
            {partner.user && <QuoteUser {...partner.user} />}
          </blockquote>
        </Tab.Pane>
      ))}
    </Tab.Content>
  </Tab.Container>
);

PartnersAndContributors.defaultProps = {
  tab: 0,
};

type QuoteUserType = { name: string, role: string, imgSrc: string };
const QuoteUser = ({ name, role, imgSrc }: QuoteUserType) => (
  <footer className="blockquote-footer">
    <div className="user user-sm">
      <img
        className="user-img"
        src={imgSrc}
        width="60"
        height="60"
        alt={name}
      />
      <div className="user-data">
        <p className="user-name">{name}</p>
        <p className="user-role">{role}</p>
      </div>
    </div>
  </footer>
);


export default PartnersAndContributors;
