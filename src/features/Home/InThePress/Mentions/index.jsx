// @flow
import React from 'react';
// import { Row, Col } from '@windingtree/wt-ui-react';

import mentions from './data';

const Mentions = () => (
  <ul className="logo-gallery mb-0">
    {mentions.map(mention => (
      <li className="logo-gallery-item">
        <a href={mention.href}>
          <img src={mention.imgSrc} alt="" />
        </a>
      </li>
    ))}
  </ul>
);

export default Mentions;
