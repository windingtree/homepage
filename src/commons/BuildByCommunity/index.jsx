import React from 'react';
import Tile from 'commons/Card';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import projectList from 'DATA/commons/BuildByCommunity';
import ScrollableAnchor from 'react-scrollable-anchor';


const BuildByCommunity = (props:*) => {
    const { id } = props;

    return (
        <ScrollableAnchor id={id}>

          <Container className="app-section section-community border-top border-bottom border-light">
            <header className="mb-2 mb-md-4 text-center">
              <h2>Build by Community</h2>
            </header>

            <Row className="justify-content-center">
              <Col xs={11} sm={12} md={10} lg={8}>
                <div className="card-deck">
                  {projectList.map((project, index) => (
                      <>
                        <Tile
                          imgSrc={project.imgSrc}
                          imgWidth="100px"
                          title={project.title}
                          text={project.text}
                          href={project.href}
                        />
                        {((index % 2 !== 0) && (index < projectList.length - 1))
                          ? <div className="d-none d-sm-block w-100 mb-2" />
                          : null
                        }
                      </>
                  ))
                  }
                </div>
              </Col>
            </Row>
          </Container>

        </ScrollableAnchor>
    )

};

export default BuildByCommunity;
