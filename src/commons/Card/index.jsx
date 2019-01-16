/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from '@windingtree/wt-ui-react';

type PropType = {
  imgSrc: string,
  imgWidth?: number,
  title: string,
  text?: string,
  linkText?: string,
  href: string,
  main?: boolean,
  shortText?: string,
  buttonLabel?: string
};

const WTCard = (props: PropType) => {
  const {
    imgSrc, imgWidth, title, linkText, href, text, main, shortText, buttonLabel,
  } = props;
  return (
    <Card as={Link} style={{ marginLeft: 10, marginRight: 10 }} className="text-center" to={href}>
      <Card.Header>
        <Image src={imgSrc} alt={title} fluid style={{ width: imgWidth }} />
      </Card.Header>
      <Card.Body>
        <Card.Title as="h5">{title}</Card.Title>
        {(shortText || text) && (<Card.Text className="text-center">{main ? shortText : text}</Card.Text>)}
      </Card.Body>
      {(buttonLabel && linkText) && (
      <Card.Footer>
        <LinkContainer to={href}>
          {main
            ? <Button as="span" variant="link">{buttonLabel}</Button>
            : <Card.Link as="span" className="text-link d-inline-block">{linkText}</Card.Link>
            }
        </LinkContainer>
      </Card.Footer>
      )}
    </Card>
  );
};
export default WTCard;
