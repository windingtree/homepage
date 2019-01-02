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
    <Card as="a" href={href} style={{ marginLeft: 10, marginRight: 10 }} className="text-center">
      <Card.Header className="text-center">
        <Image src={imgSrc} alt={title} fluid style={{ width: imgWidth }} />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h5" className="text-muted">{title}</Card.Title>
        <Card.Text className="text-muted">{main ? shortText : text}</Card.Text>
        <Card.Footer>
          {main ? <Button variant="dark" outlined block>{buttonLabel}</Button> : <Card.Link className="text-link">{linkText}</Card.Link>}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
export default WTCard;
