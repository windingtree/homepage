// @flow
import React from 'react';
import { Container } from '@windingtree/wt-ui-react';

import ScrollableAnchor from 'react-scrollable-anchor';


const LogosGallery = (props: *) => {
  const { id, data } = props;
  return (
    <ScrollableAnchor id={id}>
      <article className="app-section section-community border-top border-bottom border-light">
        <Container>
          <header className="mb-2 mb-md-4 text-center">
            <h2>{data.header}</h2>
          </header>

          <ul className="logo-gallery mb-0 justify-content-center">
            {data.items.map((img, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={idx} className="logo-gallery-item align-items-center d-flex">

                <img src={img.imgSrc} alt="" />

              </li>
            ))}
          </ul>

        </Container>
      </article>
    </ScrollableAnchor>
  );
};

export default LogosGallery;
