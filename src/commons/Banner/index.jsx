/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import IconList from 'commons/IconList';
import data from './data';

type PropsType = {
  variant: 'designedFor' | 'consultancy' | 'howWeWork',
  icons: boolean,
  id?: string
};

const Banner = (props: PropsType) => {
  const {
    variant, icons, id,
  } = props;
  const {
    title, text, mdiIcon, href, buttonLabel,
  } = data[variant];
  return (
    <article className="app-section section-banner bg-grad" id={id}>
      <Container>
        <Row className="align-items-center" flex>
          <Col lg={8} className="mb-1 mb-md-0 text-center text-lg-left">
            <h2 className="text-white">{title}</h2>
            <p className="lead text-white text-sm-lg">{text}</p>
            {icons && <IconList variant="white" size={48} />}
          </Col>
          <Col lg={4} className="text-center">
            <i className={`mdi mdi-xxl ${mdiIcon} text-white d-none d-lg-inline`} />
            { (href.startsWith('http')
              ? (<Button outlined variant="light" className="mt-0 mt-lg-1" href={href}>{buttonLabel}</Button>)
              : (
                <LinkContainer to={href}>
                  <Button outlined variant="light" className="mt-0 mt-lg-1">{buttonLabel}</Button>
                </LinkContainer>))}
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Banner;
