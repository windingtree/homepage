/* @flow */
import React from 'react';
// TODO replace this import
import Card from '@windingtree/wt-ui-react/lib/components/Card';

type PropType = {
    imgSrc: string,
    title: string,
    linkText: string,
    href: string
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, title, linkText, href,
  } = props;
  return (
    <Card>
      <Card.Header>
        <Card.Image src={imgSrc} variant="top" />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Link href={href}>{linkText}</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default WTCard;
