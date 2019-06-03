// @flow
import React from 'react';
// import { Row, Col } from '@windingtree/wt-ui-react';

import mentions from 'DATA/commons/InThePress/Mentions';

const Mentions = () => (
  <ul className="logo-gallery mb-0 justify-content-center">
    {mentions.map((mention, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={idx} className="logo-gallery-item align-items-center d-flex">
        <a href={mention.href} target="_blank" rel="noopener noreferrer">
          <img src={mention.imgSrc} alt="" />
        </a>
      </li>
    ))}
  </ul>
);

export default Mentions;
