// @flow
import React from 'react';
import {
  Row,
  Col,
  Image,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';


const ShortBenefits = (props: *) => {
  const { data, id } = props;

  return (
    <ScrollableAnchor id={id}>

      <section className="app-section px-md-4 my-2">
        <Row className="justify-content-center px-md-2 pt-md-4 pt-xs-2">

          {data.map(benefit => (
            <Col sm={12} lg={3} className="text-center mb-2 mb-md-0" key={benefit.header}>
              <Image src={benefit.imgSrc} alt={benefit.header} fluid style={{ width: 'auto', height: 100 }} />
              <h3 className="my-1 mt-md-2 mb-md-1 text-muted">{benefit.header}</h3>
            </Col>
          ))}

        </Row>

      </section>
    </ScrollableAnchor>
  );
};

export default ShortBenefits;
