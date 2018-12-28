/* @flow */
import React from 'react';
import { Card, Image, Button } from '@windingtree/wt-ui-react';

type PropType = {
  imgSrc: string,
  title: string,
  text: string,
  linkText: string,
  href: string,
  withButton?: boolean
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, title, linkText, href, text, withButton,
  } = props;
  return (
    <Card as="a" href={href}>
      <Card.Header className="text-center">
        <Image src={imgSrc} alt={title} fluid style={{ height: 80 }} />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h6">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
        {withButton ? <Button variant="dark" outlined>{linkText}</Button> : <Card.Link>{linkText}</Card.Link>}
      </Card.Body>
    </Card>
  );
};
export default WTCard;
