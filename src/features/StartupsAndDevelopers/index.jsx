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
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import BuiltByCommunity from 'commons/BuiltByCommunity';
import BlockQuoteSection from 'commons/BlockQuoteSection';

import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -100, scrollDuration: 400 });

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

    <Banner variant="howWeWork"  id="opensource"/>


    <article className="section-already-with-us">

      <section className="app-section ">

        
        <PartnersAndContributors  id="partners" header="Already With Us" cta=""/>


        <header className="text-center mb-2">
          <h3 className="text-muted">Developers and Contributors</h3>
        </header>
        <Contributors  id="contributors"/>

      </section>

      <BuiltByCommunity id="builtbycommunity"/>
      <Events  id="events"/>
      <VideoGallery  id="video"/>

    </article>
    <SuscribeForUpdates  id="subscribe"/>
    <ReadyToUse  id="ready"/>
  </div>

);

export default StartupsAndDevelopers;
