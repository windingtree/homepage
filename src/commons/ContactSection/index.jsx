/* @flow */
import React from 'react';
import {
  Container,
  Row,
  Col,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ContactSection = (props: *) => {
  const { data, id } = props;

  return (
    <ScrollableAnchor id={id}>

      <div className="app-section section-about bg-pink pb-2 pb-md-4">
        <Container className="">
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <h2 className="text-center">
                {data.header}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <p className="mb-2 text-center">
                {data.text}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center py-1">

            {data.contactList.map(contact => (
              <Col xs={3} md={2} lg={2} className="text-center px-1 px-md-2 px-lg-3">
                <a href={contact.contactUrl} target="_blank" rel="noopener noreferrer" className="contact-thumbnail">
                  <img src={contact.contactImgSrc} alt={contact.contactName} />
                </a>
              </Col>
            ))}

          </Row>

        </Container>
      </div>
    </ScrollableAnchor>
  );
};

export default ContactSection;
