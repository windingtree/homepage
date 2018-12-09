/* @flow */
import React from 'react';
import {
  Image, Row, Col,
} from '@windingtree/wt-ui-react';

type PropsType = {
  title: string,
  largeNumber: string,
  lightText: string,
  lightNumber: string,
  darkText: string,
  darkNumber: string,
  img?: string,
  inverted: boolean
};

const Item = (props: PropsType) => {
  const {
    title, largeNumber, lightNumber, lightText, darkNumber, darkText, img, inverted,
  } = props;
  const reversedClass = inverted ? 'flex-md-row-reverse' : '';
  return (
    <div className="lif-ico-item text-center text-md-left text-white">
      <Row className={`align-items-md-center ${reversedClass}`}>
        <Col md={6} className="mb-1 mb-md-0 text-md-right">
          <Image src={img} alt="ETH Raised" className="lif-ico-item__icon img-fluid" />
        </Col>
        <Col md={6}>
          {title}
          <div className="display-2">{largeNumber}</div>
          <ul className="list-inline mt-1">
            <li className="list-inline-item">
              <span className="lif-ico-item__legend lif-ico-item__legend--after mb-1" />
              <h3 className="text-white">{lightNumber}</h3>
              {lightText}
            </li>
            <li className="list-inline-item">
              <span className="lif-ico-item__legend lif-ico-item__legend--before mb-1" />
              <h3 className="text-white">{darkNumber}</h3>
              {darkText}
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

Item.defaultProps = {
  inverted: false,
};

export default Item;
