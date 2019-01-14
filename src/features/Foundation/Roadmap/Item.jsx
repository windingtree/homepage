/* @flow */
import React from 'react';
import { Button } from '@windingtree/wt-ui-react';
import classNames from 'classnames';
import type { ItemType } from './data';
import {
  STARTING, IN_PROGRESS, DONE,
} from './data';
import './styles.scss';

const Item = (props: ItemType) => {
  const {
    done, text, buttonLabel, href, muted, isMainButton,
  } = props;
  const buttonVariant = isMainButton ? 'primary' : 'dark';
  const iconClassName = classNames(
    'mdi',
    {
      'mdi-circle-outline': STARTING === done,
      'mdi-circle-edit-outline': IN_PROGRESS === done,
      'mdi-checkbox-marked-circle': DONE === done,
      'text-muted': muted,
      'roadmap-item': !muted,
    },
  );
  const spanClassName = classNames(
    {
      'text-muted': muted,
    },
  );

  return (
    <>
      <i className={iconClassName} />
      <span className='pl-1 {spanClassName}' title="">{text}</span><br />
      {buttonLabel && href && <Button href={href} variant={buttonVariant} outlined={!isMainButton} className="ml-2" size="sm" target="_blank">{buttonLabel}</Button>}
    </>
  );
};

export default Item;
