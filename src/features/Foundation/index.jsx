// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Events from 'commons/Events';
import Hero from 'commons/Hero';
import Team from './Team';
import About from './About';
import { members, advisors } from './data';

const Foundation = () => (
  <main className="app-content">
    <Hero variant="foundation" />
    <About id="about" />
    <Team title="Team" members={members} />
    <Team title="Advisors" members={advisors} />
    <Banner variant="consultancy" />
    <Events />
  </main>
);

export default Foundation;
