// @flow
import React from 'react';
import {
  Row, Col, Container, Button,
} from '@windingtree/wt-ui-react';

const ExtendedCard = (props: *) => {
  const { data } = props;

  return (
    <Container className="extended-card card text-center py-2">
      <Row className="py-1">
        <Col>
          <img src={data.imgSrc} alt={data.title} className="" style={{ width: 80 }} />
        </Col>
      </Row>
      <Row className="card-body px-0">
        <Col>
          <h3 className="text-center display-linebreak  extended-card-title">{data.title}</h3>
          <div className="card-text extended-card-text">
            <ul>
              {data.benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="card-body pt-0 pb-1 py-md-0">
        <Col>
          <p className="text-center">
            <small>
              <b>{data.accentedNotice}</b>
              <br />
              {' '}
              {data.secondaryNotice}
            </small>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center px-1">

        <Button href={data.buttonUrl} block className={`mt-0 mt-lg-1 ${data.buttonStyle}`}>{data.buttonLabel}</Button>

      </Row>

    </Container>
  );
};
export default ExtendedCard;
