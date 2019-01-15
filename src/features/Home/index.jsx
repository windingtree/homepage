// @flow
import React from 'react';
import VideoGallery from 'commons/VideoGallery';
import Events from 'commons/Events';
import Banner from 'commons/Banner';
import LifToken from './LifToken';
import Partners from './Partners';
import InThePress from './InThePress';
import Features from './Features';
import MainBanner from './MainBanner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import HowItWorks from 'commons/HowItWorks';

const Home = () => (
  <main id="app-content">
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
