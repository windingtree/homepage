// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Events from 'commons/Events';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import VideoGallery from 'commons/VideoGallery';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import { members, advisors } from 'DATA/commons/Team';
import Team from 'commons/Team';
import Roadmap from 'commons/Roadmap';
import About from './About';


const Foundation = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.foundation} />
    <Hero variant="foundation" />
    <About id="about" />
    <Team title="Team" members={members} />
    <Team title="Advisors" members={advisors} />
    <VideoGallery />
    <Banner variant="consultancy" id="Services" />
    <Roadmap />
    <Events />
    <SuscribeForUpdates />
    <ReadyToUse />
  </main>
);

export default Foundation;
