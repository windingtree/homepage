// @flow
import React from 'react';
import {
  Row,
  Col,
  Image,
} from '@windingtree/wt-ui-react';

const ShortBenefits = (props: *) => {
  const { data } = props;

  return (
    <section className="app-section px-md-4">
      <Row className="justify-content-center px-md-2 pt-md-4 pt-xs-2">

        {data.map(benefit => (
          <Col sm={12} lg={3} className="text-center mb-2 mb-md-0" key={benefit.header}>
            <Image src={benefit.imgSrc} alt={benefit.header} fluid width="100" />
            <h3 className="my-1 mt-md-2 mb-md-1 text-muted">{benefit.header}</h3>
          </Col>
        ))}

      </Row>

    </section>
  );
};

export default ShortBenefits;
