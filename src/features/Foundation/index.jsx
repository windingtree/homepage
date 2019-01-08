// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Hero from 'commons/Hero';
import Team from './Team';

const Foundation = () => (
  <main className="app-content">
    <Hero variant="foundation" />
    <Banner variant="consultancy" />
    <Team />
  </main>
);

export default Foundation;
