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
import Partners from 'commons/Partners';
import InThePress from 'commons/InThePress';
import Features from 'commons/Features';
import MainPageHeroBanner from 'commons/MainPageHeroBanner';

const Home = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <MainPageHeroBanner />
    <Features />
    <HowItWorks />
    <Partners />
    <InThePress />
    <Banner variant="designedFor" icons />
    <VideoGallery />
    <Events />
    <SuscribeForUpdates />
    <ReadyToUse />
  </main>
);

export default Home;

