// @flow
import React from 'react';
import VideoGallery from 'commons/VideoGallery';
import Events from 'commons/Events';
import Banner from 'commons/Banner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import HowItWorks from 'commons/HowItWorks';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Slicks from 'commons/Slick';
import InThePress from 'commons/InThePress';
import Features from 'commons/Features';
import MainPageHeroBanner from 'commons/MainPageHeroBanner';


const Home = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <MainPageHeroBanner />
    <Features id="features"/>
    <HowItWorks id="howitworks"/>
    <PartnersAndContributors id="partners" header='Partners' cta="Become partner">
        <Slicks />
    </PartnersAndContributors>
    <InThePress id="press"/>
    <Banner variant="designedFor" icons id="opensource"/>
    <VideoGallery id="video"/>
    <Events id="events"/>
    <SuscribeForUpdates id="subscribe"/>
    <ReadyToUse id="ready"/>
  </main>
);

export default Home;
