/* @flow */
import React from 'react';
import { Image } from '@windingtree/wt-ui-react';
import Benefit from './Benefit';
import Icon from './img/2.svg';

const NewBusinessModel = () => (
  <Benefit>
    <Image src={Icon} alt="New Business Model" fluid />
    <Benefit.Title>New Business Models</Benefit.Title>
    <Benefit.Body>
      By opening up the platform we allow entrepreneurs to experiment with new business models in
      a safe and secure way.
    </Benefit.Body>
  </Benefit>
);

export default NewBusinessModel;
