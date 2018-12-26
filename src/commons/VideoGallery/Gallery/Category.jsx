// @flow
import React from 'react';
import { Card } from '@windingtree/wt-ui-react';
import VideoModal from './VideoModal';

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
        <Card className="text-right">
          <Card.Image variant="top" src={thumbnail} alt={title} onClick={this.hanldeOnClick} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Card.Link href={href} target="_blank">{text}</Card.Link>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default Category;
