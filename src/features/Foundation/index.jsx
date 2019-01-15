// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Events from 'commons/Events';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import Team from './Team';
import About from './About';
import Roadmap from './Roadmap';
import { members, advisors } from './data';

const Foundation = () => (
  <main id="app-content">
    <Hero variant="foundation" />
    <About id="about" />
    <Team title="Team" members={members} />
    <Team title="Advisors" members={advisors} />
    <Banner variant="consultancy" />
    <Roadmap />
    <Events />
    <SuscribeForUpdates />
    <ReadyToUse />
  </main>
);

export default Foundation;
