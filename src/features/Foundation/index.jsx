// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import Team from './Team';
import { members, advisors } from './data';

const Foundation = () => (
  <main className="app-content">
    <Hero variant="foundation" />
    <Banner variant="consultancy" />
    <Team title="Team" members={members} />
    <Team title="Advisors" members={advisors} />
    <SuscribeForUpdates />
    <ReadyToUse />
  </main>
);

export default Foundation;
