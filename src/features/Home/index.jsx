// @flow
import React from 'react';
import VideoGallery from 'commons/VideoGallery';
import Events from 'commons/Events';
import Banner from 'commons/Banner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import HowItWorks from 'commons/HowItWorks';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Partners from './Partners';
import InThePress from './InThePress';
import Features from './Features';
import MainBanner from './MainBanner';

const Home = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <MainBanner />
    <Features />
    <HowItWorks />
    {/* <LifToken /> */}
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
