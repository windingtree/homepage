/* @flow */
import React from 'react';
import { Button } from '@windingtree/wt-ui-react';
import classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
import type { ItemType } from './data';
import {
  STARTING, IN_PROGRESS, DONE,
} from './data';

type PropsType = ItemType & { muted: boolean };

const Item = (props: PropsType) => {
  const {
    done, text, buttonLabel, href, muted, isMainButton,
  } = props;
  const buttonVariant = isMainButton ? 'primary' : 'dark';
  const iconClassName = classNames(
    'mdi float-left',
    {
      'mdi-circle-outline': STARTING === done,
      'mdi-circle-edit-outline': IN_PROGRESS === done,
      'mdi-checkbox-marked-circle': DONE === done,
      'text-muted': muted,
      'roadmap-item': !muted,
    },
  );

  return (
    <>
      <i className={iconClassName} />
      <span>{text}</span>
      {buttonLabel && href && (href.startsWith('http')
        ? (<Button variant={buttonVariant} outlined={!isMainButton} size="sm" href={href}>{buttonLabel}</Button>)
        : (
          <LinkContainer to={href}>
            <Button variant={buttonVariant} outlined={!isMainButton} size="sm">{buttonLabel}</Button>
          </LinkContainer>))}
    </>
  );
};

export default Item;
