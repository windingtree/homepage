/* @flow */
import React from 'react';
import { Card, Image } from '@windingtree/wt-ui-react';

type PropType = {
  imgSrc: string,
  title: string,
  text: string,
  linkText: string,
  href: string
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, title, linkText, href, text,
  } = props;
  return (
    <Card as="a" href={href}>
      <Card.Header className="text-center">
        <Image src={imgSrc} alt={title} fluid />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h6">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
        <Card.Link>{linkText}</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default WTCard;
