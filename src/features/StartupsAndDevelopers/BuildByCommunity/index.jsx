import React from 'react';
import Tile from 'commons/Card';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import projectList from './data.json';
import TileImg from './img/github.svg';

const BuildByCommunity = () => (

  <Container className="app-section section-community border-top border-bottom border-light">
    <header className="mb-2 mb-md-4 text-center">
      <h2>Build by Community</h2>
    </header>

    <Row className="justify-content-center">
      <Col className="col-11 col-sm-12 col-md-10 col-lg-8">
        <div className="card-deck">
          {projectList.projects.map((project, index) => (
              <>
                <Tile
                  imgSrc={TileImg}
                  imgWidth="100px"
                  title={project.title}
                  text={project.text}
                  href={project.href}
                />
                {((index % 2 !== 0) && (index < 3)) ? <div className="d-none d-sm-block w-100 mb-2" /> : null}
              </>
          ))
          }
        </div>
      </Col>
    </Row>
  </Container>

);

export default BuildByCommunity;
