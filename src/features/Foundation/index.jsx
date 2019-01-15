// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Hero from 'commons/Hero';
import Team from './Team';
import Roadmap from './Roadmap';
import { members, advisors } from './data';

const Foundation = () => (
  <main className="app-content">
    <Hero variant="foundation" />
    <Banner variant="consultancy" />
    <Team title="Team" members={members} />
    <Team title="Advisors" members={advisors} />
    <Roadmap />
  </main>
);

export default Foundation;
