/* @flow */
import React from 'react';
import {
  Button, Row, Col, Image,
} from '@windingtree/wt-ui-react';

const ImgLeftSection = (props: *) => {
  const { data } = props;
  return (
    <Row className="d-flex align-items-center pb-3">

      <Col md={6} lg={5} className="d-md-none text-center text-md-right pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Image src={data.imgSrc} alt={data.title} fluid width="200" />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0">
        <h3 className="text-center text-md-left pt-1">
          {' '}
          {data.title}
        </h3>
        <p className="pb-1">
          {' '}
          {data.text}
        </p>
        <div className="text-center text-md-left">
          { data.primaryButtonUrl
            ? (
              <Button href={data.primaryButtonUrl} className="mb-1 mr-lg-1" variant="accent">
                {data.primaryButtonLabel}
              </Button>
            ) : null
            }

          { data.secondaryButtonUrl
            ? (
              <Button href={data.secondaryButtonUrl} className="mb-1 mr-lg-1" variant="dark" outlined>
                {data.secondaryButtonLabel}
              </Button>
            ) : null
            }
        </div>
      </Col>
      <Col md={6} lg={5} className="d-none d-md-block text-center text-md-right pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Image src={data.imgSrc} alt={data.title} fluid width="200" />
      </Col>
    </Row>
  );
};

export default ImgLeftSection;
