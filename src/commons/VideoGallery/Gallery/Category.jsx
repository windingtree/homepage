// @flow
import React from 'react';
import { Card } from '@windingtree/wt-ui-react';
import { LinkContainer } from 'react-router-bootstrap';
import VideoModal from 'commons/VideoModal';
import './styles.scss';

type PropsType = {
  thumbnail: string,
  title: string,
  text: string,
  href?: string,
  videoSrc: string
};

type StateType = {
  showModal: boolean
};

class Category extends React.Component<PropsType, StateType> {
  state = { showModal: false };

  hanldeOnClick = (e: SyntheticMouseEvent<*>) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      thumbnail, title, text, href, videoSrc,
    } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <VideoModal show={showModal} videoSrc={videoSrc} onHide={this.hideModal} title={title} />
        <Card className="text-center">

          <button type="button" className="card-img-top" onClick={this.hanldeOnClick}>
            <img src={thumbnail} alt={title} className="img-fluid" />
          </button>

          <Card.Body>
            <Card.Title><span className="text-lg">{title}</span></Card.Title>
            <Card.Link href={href} className="text-link d-inline-block" target="_blank">{text}</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Category;
