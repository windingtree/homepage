// @flow
import React from 'react';
import YouTube from 'react-youtube';
import { Modal } from '@windingtree/wt-ui-react';

type PropsType = {
  onHide?: (SyntheticMouseEvent<*>) => void,
  show: boolean,
  title: string,
  videoSrc: string
};

const VideoModal = (props: PropsType) => {
  const {
    show, title, videoSrc, onHide, ...otherProps
  } = props;
  const opts = {
    playerVars: {
      autoplay: 1,
      accelerometer: 1,
      'encrypted-media': 1,
      gyroscope: 1,
      'picture-in-picture': 1,
    },
  };
  return (
    <Modal {...otherProps} dialogClassName="modal-dialog-centered modal-lg" show={show} className="modal-media" onHide={onHide}>
      <Modal.Body>
        <div className="video-fluid">
          <YouTube
            videoId={videoSrc}
            className="youtube-video"
            opts={opts}
            onHide={onHide}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
