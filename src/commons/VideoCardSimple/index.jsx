// @flow
import React from 'react';
import { Card } from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';

type StateType = {
  showModal: boolean
};

class VideoCardSimple extends React.Component<*, StateType> {
    state = { showModal: false };

    hanldeOnClick = (e: SyntheticMouseEvent<*>) => {
      e.preventDefault();
      this.setState({ showModal: true });
    }

    hideModal = () => {
      this.setState({ showModal: false });
    };

    render() {
      const { videoItem } = this.props;
      const { showModal } = this.state;
      return (
            <>
              <VideoModal show={showModal} videoSrc={videoItem.videoSrc} onHide={this.hideModal} title="About Hackathon" />
              <Card className="text-center card-video shadow">

                <button type="button" className="card-img-top rounded" onClick={this.hanldeOnClick}>
                  <div className="img-crop rounded" style={{ background: `url(${videoItem.thumbnail})`, paddingBottom: '55%' }}>
                    <img src={videoItem.thumbnail} className="img-fluid w-100" alt="" />
                  </div>
                </button>

              </Card>
            </>
      );
    }
}

export default VideoCardSimple;
