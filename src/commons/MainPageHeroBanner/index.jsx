// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';
import LearnMoreCards from 'commons/LearnMoreCards';


type StateType = {
  showModal: boolean
};

class MainPageHeroBanner extends React.Component<*, StateType> {
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
    const { data } = this.props;
    return (
      <>
        <section className="app-section hero-homepage pt-1 pt-lg-5">

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
            videoSrc={data.secondaryCTAUrl}
            onHide={this.hideModal}
            title=""
          />
          <Container>
            <header className="mb-3 mb-lg-5 pb-0 pb-lg-5 text-center">
              <Row className="justify-content-md-center">
                <Col md={9}>
                  <h1 className="mb-1 text-white">
                    {data.mainHeading}
                  </h1>
                </Col>
                <Col md={6}>
                  <p className="mb-2 lead text-white">
                    {data.subHeading}
                  </p>
                </Col>
                <Col xs={12}>
                  <ul className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
                    <li className="mb-1 mb-lg-0 ml-0 mr-md-1">
                      <Button  href={data.secondaryCTAUrl} block>
                        {data.secondaryCTALabel}
                      </Button>
                      
                    </li>
                    <li className="mb-1 mb-lg-0 list-inline-item">
                      <Button href={data.mainCTAUrl} block outlined variant="light">
                        {data.mainCTALabel}
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </header>
          </Container>
        </section>

        <section className="app-section section-hero-cards pb-0">
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={10}>
                <LearnMoreCards main />
              </Col>
            </Row>
          </Container>
        </section>
      </>

    );
  }
}

export default MainPageHeroBanner;
