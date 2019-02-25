import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import { Button } from '@windingtree/wt-ui-react';

class Gallery extends Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      galleryOpened: false,
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened,
    }));
  }

  render() {
    const { galleryOpened } = this.state;
    const { photos } = this.props;
    return (
        <>
          <Button onClick={this.toggleGallery} outlined variant="light" className="centered-item">Check Photos</Button>

          <ReactBnbGallery
            show={galleryOpened}
            photos={photos}
            onClose={this.toggleGallery}
          />
      </>
    );
  }
}

export default Gallery;
