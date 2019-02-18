/* @flow */
import React from 'react';
import {
  Form, Col, Container, Row, Button,
} from '@windingtree/wt-ui-react';
import countryList from 'country-list';
import { radios } from 'DATA/features/JoinCommunity/Form';

type PropsType = {
  onFirstNameChange: (SyntheticMouseEvent<*>) => void,
  onLastNameChange: (SyntheticMouseEvent<*>) => void,
  onEmailChange: (SyntheticMouseEvent<*>) => void,
  onCounrtyChange: (SyntheticMouseEvent<*>) => void,
  onIdeasChange: (SyntheticMouseEvent<*>) => void,
  onRadiosChange: (SyntheticMouseEvent<*>) => void,
  onSubmit: (SyntheticMouseEvent<*>) => void
};

const FormInput = (props: PropsType) => {
  const countrys = countryList.getNames();
  const {
    onFirstNameChange, onLastNameChange, onEmailChange, onCounrtyChange, onIdeasChange,
    onRadiosChange, onSubmit,
  } = props;

  return (
    <Container className="app-section">
      <Row className="justify-content-center">
        <Col xs={11} sm={12} md={10} lg={8}>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Control type="email" placeholder="First Name" onChange={onFirstNameChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Control type="email" placeholder="Last Name" onChange={onLastNameChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="E-mail" onChange={onEmailChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCountry">
                  <Form.Control as="select" onChange={onCounrtyChange}>
                    {countrys.map(c => <option key={c}>{c}</option>)}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Your proposal ideas, interests."
                onChange={onIdeasChange}
              />
            </Form.Group>
            {radios.map(radio => (
              <Form.Check
                className="custom-radio"
                type="radio"
                label={radio.label}
                id={`disabled-default-${radio.id}`}
                name="subscriptionType"
                key={radio.id}
                onChange={onRadiosChange}
              />))}
            <Button type="submit" variant="primary" href="/" onClick={onSubmit}>Complete and go to Main page</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormInput;
