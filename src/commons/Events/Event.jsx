/* @flow */
import React from 'react';
import {
  Col, Row, Image, Button, Container,
} from '@windingtree/wt-ui-react';
import type { EventType } from './data';

const Event = (props: EventType) => {
  const {
    date, month, name, location, imgSrc, text, buttonHref, buttonText,
  } = props;
  return (
    <div className="item">
      <Row>
        <Col sm={7} lg={4} className="col-12">
          <div className="media mb-1 mb-md-0">
            <div className="date-box mr-1">
              {date}
              <br />
              {month}
            </div>
            <div className="media-body align-self-center">
              <h5 className="my-0">{name}</h5>
              {location}
            </div>
          </div>
        </Col>
        <Col sm={5} lg={8} className="col-12 text-center">
          <Image src={imgSrc} fluid />
          { text && (<p className="my-1 text-left">{text}</p>) }
          { buttonHref && buttonText && (
            <Button href={buttonHref} variant="dark" outlined block>{buttonText}</Button>
          ) }
        </Col>
      </Row>
    </div>
  );
};

export default Event;
