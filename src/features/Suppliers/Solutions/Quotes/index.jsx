// @flow
import React from 'react';
import { Tab, Nav, Col } from '@windingtree/wt-ui-react';

import quotes from './data';

const Quotes = () => (
  <section className="row">
    <header className="text-center col-lg-8 m-auto">
      <h3>Use Cases</h3>
    </header>

    <Tab.Container id="quotes tabs" defaultActiveKey={quotes[0].name}>
      <Nav className="nav-pointers col-lg-12" variant="tabs">
        {quotes.map(quote => (
          <Nav.Item as={Col} className="col-6 col-md-4 col-lg-2">
            <Nav.Link eventKey={quote.name} className="pb-1 pb-lg-2">
              <img
                className="img-fluid"
                src={quote.imgSrc}
                alt={quote.name}
                style={{ maxWidth: quote.imgWidth, position: 'relative', top: quote.imgTopPosition }}
              />
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content className="px-2 py-3 bg-white">
        {quotes.map(quote => (
          <Tab.Pane eventKey={quote.name}>
            <blockquote className="blockquote blockquote-alt">
              <p className="blockquote-body">
                {quote.text}
                <a href={quote.href}>Read full article</a>
              </p>
              {quote.user && <QuoteUser {...quote.user} />}
            </blockquote>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  </section>
);

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

export default Quotes;
