/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Item from './Item';
import img1 from './img/1.svg';
import img2 from './img/2.svg';
import img3 from './img/3.svg';
import img4 from './img/4.svg';

const LifIco = () => (
  <section className="lif-ico py-3 py-md-5 bg-grad">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="mb-2 mb-md-4 text-center text-white">ICO Stats</h2>
          <Item
            title="ETH Raised"
            largeNumber="16,278"
            lightNumber="2,418"
            lightText="pre ICO"
            darkNumber="13,860"
            darkText="ICO"
            img={img1}
            inverted
          />
          <hr />
          <Item
            title="Backers"
            largeNumber="7,082"
            lightNumber="6,346"
            lightText="ICO"
            darkNumber="736"
            darkText="pre ICO"
            img={img2}
          />
          <hr />
          <Item
            title="Lifs Generated"
            largeNumber="24,976,541"
            lightNumber="18,732,406"
            lightText="for backers"
            darkNumber="6,244,135"
            darkText="for project funding"
            img={img3}
            inverted
          />
          <hr />
          <Item
            title="ETH in the MVM"
            largeNumber="5,164"
            lightNumber="11,114"
            lightText="for project funding"
            darkNumber="5,164"
            darkText="in the MVM"
            img={img4}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default LifIco;
