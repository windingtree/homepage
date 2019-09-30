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
    this.setState({ showModal: true, videoSrc: e.target.value });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal, videoSrc } = this.state;
    const { data } = this.props;
    return (
      <>
        <section className="app-section hero-lisbon pt-1 pt-lg-5 shadow">

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
            videoSrc={videoSrc}
            onHide={this.hideModal}
            title="Recap of Hacktravel"
          />

          <Container>
            <header className="mb-3 mb-lg-5 pb-0 pb-lg-5 text-center">
              <Row className="justify-content-md-center">


                <Col md={9}>
                  <p className="lead d-md-none mb-1 line-2 display-linebreak text-white pt-2 pb-1">
                    {data.subtitle}
                  </p>
                </Col>

                <Col md={9}>
                  <h1 className="mb-1 text-white pb-1 pb-md-0">
                    {data.title}
                  </h1>
                </Col>


                <Col md={9}>
                  <h3 className="mb-1 text-white display-linebreak d-none d-md-block ">
                    {data.subtitle}
                  </h3>
                </Col>

                <Col md={9}>
                  <p className="mb-2 lead line-2 text-white d-none d-md-block">{data.description}</p>
                </Col>
                <Col md={9}>
                  <p className="mb-2 lead text-white d-block d-md-none">{data.description}</p>
                </Col>
                <Col xs={12}>
                  <ul className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
                    {
                      data.mainButtonUrl && data.mainButtonLabel
                      && (
                        <li className="mb-1 mb-lg-0 ml-0 mr-md-1">
                          <Button href={data.mainButtonUrl} block>
                            {data.mainButtonLabel}
                          </Button>
                        </li>
                      )}
                    {data.secondaryButtons.map(({ buttonLabel, buttonUrl }) => (
                      <li className="mb-1 mb-lg-0 list-inline-item" key={buttonUrl}>
                        <Button block variant="light" onClick={this.hanldeOnClick} value={buttonUrl}>
                          {buttonLabel}
                        </Button>
                      </li>
                    ))}
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
