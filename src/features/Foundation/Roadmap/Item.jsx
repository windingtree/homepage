/* @flow */
import React from 'react';
import { Button } from '@windingtree/wt-ui-react';
import type { ItemType } from './data';
import './styles.scss';

const Item = (props: ItemType) => {
  const {
    done, text, buttonLabel, href, muted, isMainButton,
  } = props;
  const icon = done ? 'mdi-checkbox-marked-circle' : 'mdi-circle-slice-4';
  const isMuted = muted ? 'text-muted' : 'roadmap-item';
  const buttonVariant = isMainButton ? 'primary' : 'dark';
  return (
    <>
      <i className={`mdi ${icon} ${isMuted}`} />
      <span className={`${isMuted}`} title="">{text}</span><br />
      {buttonLabel && href && <Button href={href} variant={buttonVariant} outlined={!isMainButton} className="ml-1" size="sm" target="_blank">{buttonLabel}</Button>}
    </>
  );
};

export default Item;
