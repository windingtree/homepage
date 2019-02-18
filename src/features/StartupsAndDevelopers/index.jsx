/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Contributors from 'commons/Contributors';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Events from 'commons/Events';
import Hero from 'commons/Hero';
import Banner from 'commons/Banner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import VideoGallery from 'commons/VideoGallery';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import BuiltByCommunity from 'commons/BuiltByCommunity';
import BlockQuoteSection from 'commons/BlockQuoteSection';

const StartupsAndDevelopers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.community} />
    <Hero variant="startupsAndDevelopers" icons />
    <section className="app-section section-quote">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <BlockQuoteSection />
          </Col>
        </Row>
      </Container>
    </section>

    <Banner variant="howWeWork" />


    <article className="section-already-with-us">

      <section className="app-section ">

        <Container>
          <header className="mb-2 mb-md-4 text-center">
            <h2>Already With Us</h2>
          </header>
          <Row className="justify-content-md-center">
            <Col md={10} className="mb-3">
              <PartnersAndContributors />
            </Col>
          </Row>
        </Container>

        <header className="text-center mb-2">
          <h3 className="text-muted">Developers and Contributors</h3>
        </header>
        <Contributors />

      </section>

      <BuiltByCommunity />
      <Events />
      <VideoGallery />

    </article>
    <SuscribeForUpdates />
    <ReadyToUse />
  </div>

);

export default StartupsAndDevelopers;
