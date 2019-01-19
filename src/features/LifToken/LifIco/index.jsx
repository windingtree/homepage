/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Item from './Item';
import EthRaised from './img/EthRaised.svg';
import Backers from './img/Backers.svg';
import LifGenerated from './img/LifGenerated.svg';
import EthInMvm from './img/EthInMvm.svg';

const LifIco = () => (
  <section className="app-section section-lif-ico bg-grad">
    <Container>

      <header className="mb-2 mb-md-4 text-center">
        <h2 className="text-white">ICO Stats</h2>
      </header>

      <Row className="justify-content-md-center">
        <Col md={10}>
          <Item
            title="ETH Raised"
            largeNumber="16,278"
            lightNumber="2,418"
            lightText="pre ICO"
            darkNumber="13,860"
            darkText="ICO"
            img={EthRaised}
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
            img={Backers}
          />
          <hr />
          <Item
            title="Lifs Generated"
            largeNumber="24,976,541"
            lightNumber="18,732,406"
            lightText="for backers"
            darkNumber="6,244,135"
            darkText="for project funding"
            img={LifGenerated}
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
            img={EthInMvm}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default LifIco;
