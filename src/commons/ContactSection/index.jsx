/* @flow */
import React from 'react';
import {
  Container,
  Row,
  Col,
} from '@windingtree/wt-ui-react';

const ContactSection = (props: *) => {
  const { data } = props;

  return (

    <div className="app-section section-about py-3 bg-light" id="questions">
      <Container>
        <Row className="mt-3 justify-content-center">
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
              <a href={contact.contactUrl} target="_blank" rel="noopener noreferrer">
                <img src={contact.contactImgSrc} alt={contact.contactName} className="" />
              </a>
            </Col>
          ))}

        </Row>

      </Container>
    </div>
  );
};

export default ContactSection;
