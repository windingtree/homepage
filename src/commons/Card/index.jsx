/* @flow */
import React from 'react';
import { Card, Image, Button } from '@windingtree/wt-ui-react';

type PropType = {
  imgSrc: string,
  imgWidth: number,
  title: string,
  text: string,
  linkText: string,
  href: string,
  main?: boolean,
  shortText: string,
  buttonLabel: string
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, imgWidth, title, linkText, href, text, main, shortText, buttonLabel,
  } = props;
  return (
    <Card as="a" style={{ marginLeft: 10, marginRight: 10 }} className="text-center">
      <Card.Header>
        <Image src={imgSrc} alt={title} fluid style={{ width: imgWidth }} />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h5">{title}</Card.Title>
        <Card.Text className="text-center">{main ? shortText : text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {main
          ? <Button as="span" variant="link" href={href}>{buttonLabel}</Button>
          : <Card.Link as="span" href={href} className="text-link d-inline-block">{linkText}</Card.Link>}
      </Card.Footer>
    </Card>
  );
};
export default WTCard;
