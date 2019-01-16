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
  icons: boolean
};

const Banner = (props: PropsType) => {
  const {
    variant, icons,
  } = props;
  const bannerData = data[variant];
  return (
    <article className="app-section bg-grad">
      <Container>
        <Row className="align-items-center" flex>
          <Col lg={8} className="mb-1 mb-md-0 text-center text-lg-left">
            <h2 className="text-white">{bannerData.title}</h2>
            <p className="lead text-white text-sm-lg">{bannerData.text}</p>
            {icons && <IconList variant="white" size={48} />}
          </Col>
          <Col lg={4} className="text-center">
            <i className={`mdi mdi-xxl ${bannerData.mdiIcon} text-white d-none d-lg-inline`} />
            <LinkContainer to={bannerData.href}>
              <Button outlined variant="light" className="mt-0 mt-lg-1">{bannerData.buttonLabel}</Button>
            </LinkContainer>
          </Col>
        </Row>

      </Container>
    </article>
  );
};

export default Banner;
