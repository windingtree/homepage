import React from 'react';
import { Card } from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';


class VideoCardSimple extends React.Component {
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
              <VideoModal show={showModal} videoSrc={videoItem.videoSrc} onHide={this.hideModal} />
              <Card className="text-center card-video">

                <button type="button" className="card-img-top" onClick={this.hanldeOnClick}>
                  <div className="img-crop" style={{ background: `url(${videoItem.thumbnail})`, paddingBottom: '55%' }}>
                    <img src={videoItem.thumbnail} className="img-fluid w-100" />
                  </div>
                </button>

              </Card>
            </>
      );
    }
}

export default VideoCardSimple;
