/* @flow */
import React from 'react';
import {
  Tab,
  Nav,
  Col,
  Image,
  Container,
  Row,
  Button,
} from '@windingtree/wt-ui-react';
import partners from 'DATA/commons/PartnersAndContributors';
import ScrollableAnchor from 'react-scrollable-anchor';


const PartnersAndContributors = (props: *) => {
  const { id, data, tab } = props;
  const { children } = props;
  return (
    <ScrollableAnchor id={id}>
      <section className="app-section section-partners">
        <Container>

          <Row className="justify-content-md-center mb-3">
            <Col sm={12} md={10}>

              <header className="mb-2 mb-md-4 text-center">
                <h2 className="mb-1 text-center">{data.header}</h2>
              </header>
              <Tab.Container id="partners tabs" defaultActiveKey={partners[tab].name}>
                <Nav className="nav-pointers col-lg-12" variant="tabs">
                  {partners.map(partner => (
                    <Nav.Item as={Col} className="col-4 col-md-4 col-lg-2" key={`item-${partner.name}`}>
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
                    <Tab.Pane eventKey={partner.name} key={`pane-${partner.name}`}>
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

            </Col>
          </Row>
        </Container>

        {children && (<div>{children}</div>)}

        {data.mainCTAUrl
                && (
                <Container>
                  <Row>
                    <Col sm={12}>
                      <footer className="text-center">
                        <Button
                          href={data.mainCTAUrl}
                          variant="dark"
                          outlined
                        >
                          {data.mainCTALabel}
                        </Button>
                      </footer>
                    </Col>
                  </Row>

                </Container>
                )}

      </section>
    </ScrollableAnchor>
  );
};

PartnersAndContributors.defaultProps = {
  tab: 0,
  id: 'partners',
  data: {
    header: 'Partners',
  },
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
