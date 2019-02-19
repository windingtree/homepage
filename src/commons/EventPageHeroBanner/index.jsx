// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';


type StateType = {
  showModal: boolean
};

class EventPageHeroBanner extends React.Component<*, StateType> {
  state = { showModal: false };

  hanldeOnClick = (e: SyntheticMouseEvent<*>) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <section className="app-section hero-homepage hero-lisbon pt-1 pt-lg-5">

          <div className="star star1" />
          <div className="star star2" />
          <div className="star star3" />
          <div className="star star4" />
          <div className="star star-sm star5" />
          <div className="star star-sm star6" />
          <div className="star star-sm star7" />
          <div className="star star-sm star8" />
          <div className="star shooting-star1" />
          <div className="star shooting-star2" />

          <VideoModal
            show={showModal}
            videoSrc="_qer1qd68eQ"
            onHide={this.hideModal}
            title="lockchain for Travel Distribution"
          />
          <Container>
            <header className="mb-3 mb-lg-5 pb-0 pb-lg-5 text-center">
              <Row className="justify-content-md-center">
                <Col md={9}>
                  <h1 className="mb-1 text-white">
                  Winding Tree
                  </h1>
                </Col>
                <Col md={6}>
                  <p className="mb-2 lead text-white">
                  Open source infrastructure for travel inventory distribution
                  </p>
                </Col>
                <Col xs={12}>
                  <ul className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
                    <li className="mb-1 mb-lg-0 ml-0 mr-md-1">
                      <Button href="https://goo.gl/o7WP6R" block>
                      Join Ecosystem
                      </Button>
                    </li>
                    <li className="mb-1 mb-lg-0 list-inline-item">
                      <Button block outlined variant="light" onClick={this.hanldeOnClick}>
                      Watch Video
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </header>
          </Container>
        </section>

        
      </>

    );
  }
}

export default EventPageHeroBanner;
