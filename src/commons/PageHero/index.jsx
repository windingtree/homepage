/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Row, Col, Button, Image,
} from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';


type StateType = {
  showModal: boolean
};

class PageHero extends React.Component<PropsType, StateType> {
  state = { showModal: false };

  hanldeOnClick = (e: SyntheticMouseEvent<*>) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { data } = this.props;
    const { showModal } = this.state;
    return (
      <article className="app-section section-hero pt-1 pt-md-2">
        {(data.videoSrc !== undefined) && (
          <VideoModal
            show={showModal}
            videoSrc={data.videoSrc}
            onHide={this.hideModal}
            title={data.title}
          />
        )}
        <Container>
          <Row className="align-items-center flex-column flex-md-row-reverse justify-content-md-between" flex>

            <Col md={4} className="text-center text-md-right">
              <Image fluid src={data.imgSrc} className="mb-1 mb-md-0 hero-icon" />
            </Col>

            <Col md={7} className="text-center text-md-left">
              <h1 className="text-white">{data.title}</h1>
              <p className="lead text-white text-sm-lg mb-0">{data.text}</p>
              { data.primaryButtonHref && data.primaryButtonLabel && (
                data.primaryButtonHref.startsWith('http')
                  ? (
                    <Button variant="primary" className="mt-1" href={data.primaryButtonHref}>
                      {data.primaryButtonLabel}
                    </Button>
                  )
                  : (
                    <LinkContainer to={data.primaryButtonHref}>
                      <Button variant="primary" className="mt-1" target="_blank">
                        {data.primaryButtonLabel}
                      </Button>
                    </LinkContainer>
                  ))}
              { data.SecondaryButtonHref && data.SecondaryButtonLabel && (
              <LinkContainer to={data.SecondaryButtonHref}>
                <Button outlined variant="light" className="mt-1" target="_blank">{data.SecondaryButtonLabel}</Button>
              </LinkContainer>
              )}
              { data.SecondaryButtonLabel && data.videoSrc && <Button outlined variant="light" className="mt-1 ml-sm-1 ml-md-0 ml-lg-1" onClick={this.hanldeOnClick}>{data.SecondaryButtonLabel}</Button> }
            </Col>

          </Row>
        </Container>
      </article>
    );
  }
}

export default PageHero;
