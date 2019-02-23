/* @flow */
import React from 'react';
import {
  Image, Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';
import howItWorks from 'DATA/commons/HowItWorks';
import ScrollableAnchor from 'react-scrollable-anchor';

type StateType = {
  showModal: boolean
};

class HowItWorks extends React.Component<*, StateType> {
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
    const {id} = this.props
    
    return (
        <>
          <VideoModal
            show={showModal}
            videoSrc="_qer1qd68eQ"
            onHide={this.hideModal}
            title="lockchain for Travel Distribution"
          />
          <ScrollableAnchor id={id}>
              <section className="section-how-it-works app-section">
                <Container>
                  <header>
                    <Row className="justify-content-md-center">
                      <Col md={12} className="text-center mb-1">
                        <h2>How it Works</h2>
                      </Col>
                    </Row>
                  </header>
                  <Row className="justify-content-md-center">
                    <Col md={10} className="mb-2">
                      <Image src={howItWorks.imgSrc} alt="How it works diagram" fluid />
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col sm={12} md={9} lg={8}>
                      <div className="media flex-column flex-sm-row">
                        <div className="media-body mb-0 mr-0 mr-md-2">{howItWorks.text}</div>
                        <Button variant="primary" className="align-self-center" onClick={this.hanldeOnClick}>Watch video</Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </ScrollableAnchor>
         </>
    );
  }
}

export default HowItWorks;
