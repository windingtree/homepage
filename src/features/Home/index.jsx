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

const Home = () => (
  <main className="app-content">
    <MainBanner />
    <Features />
    <LifToken />
    <Partners />
    <InThePress />
    <Banner variant="designedFor" icons />
    <VideoGallery />
    <Events />
  </main>
);

export default Home;
