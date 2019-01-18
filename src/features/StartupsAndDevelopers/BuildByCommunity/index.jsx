import React from 'react';
import Tile from 'commons/Card';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import projectList from './data.json';
import TileImg from './img/github.svg';

const BuildByCommunity = () => (

  <Container className="app-section section-community pb-0">
    <header className="mb-2 mb-md-4 text-center">
      <h2>Build by Community</h2>
    </header>

    <Row className="justify-content-md-center">
      <Col md={9}>
        <Row>
          {projectList.projects.map(project => (
            <Col md={6}>
              <Tile
                imgSrc={TileImg}
                imgWidth="100px"
                title={project.title}
                text={project.text}
                href={project.href}
              />
            </Col>
          ))
              }

        </Row>
      </Col>
    </Row>
  </Container>

);

export default BuildByCommunity;
