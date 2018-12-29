/* @flow */
import React from 'react';
import { Card, Image } from '@windingtree/wt-ui-react';

type PropType = {
  imgSrc: string,
  imgWidth: number,
  title: string,
  text: string,
  linkText: string,
  href: string
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, imgWidth, title, linkText, href, text,
  } = props;
  return (
    <Card as="a" href={href} style={{ marginLeft: 10, marginRight: 10 }}>
      <Card.Header className="text-center">
        <Image src={imgSrc} alt={title} fluid width={imgWidth} />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h5" className="text-muted">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link className="text-link">{linkText}</Card.Link>
      </Card.Footer>
    </Card>
  );
};
export default WTCard;
