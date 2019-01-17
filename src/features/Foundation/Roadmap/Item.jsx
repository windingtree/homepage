/* @flow */
import React from 'react';
import { Button } from '@windingtree/wt-ui-react';
import classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
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

  return (
    <div className="pb-1">
      <i className={iconClassName} />
      <span className="pl-1" title="">{text}</span>
      <br />
      {buttonLabel && href && (
        <LinkContainer to={href}>
          <Button variant={buttonVariant} outlined={!isMainButton} className="ml-2 roadmap__button" target="_blank">{buttonLabel}</Button>
        </LinkContainer>
      ) }
    </div>
  );
};

export default Item;
