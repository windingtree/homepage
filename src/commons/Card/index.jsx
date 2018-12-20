/* @flow */
import React from 'react';
import { Card } from '@windingtree/wt-ui-react';

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
    <Card>
      <Card.Header className="d-none d-md-block text-center">
        <img src={imgSrc} alt={title} className="img-fluid" />
      </Card.Header>
      <Card.Body className="d-flex flex-column small">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
        <span className="d-none d-md-block mt-auto">
          <Card.Link href={href} className="d-inline-block border-bottom">{linkText}</Card.Link>
        </span>
      </Card.Body>
    </Card>
  );
};
export default WTCard;
