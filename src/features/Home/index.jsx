// @flow
import React from 'react';
import LifToken from './LifToken';
import Partners from './Partners';
import InThePress from './InThePress';
import DesignedFor from './DesignedFor';
import Features from './Features';
import Banner from './Banner';

const Home = () => (
  <section>
    <Banner />
    <Features />
    <LifToken />
    <Partners />
    <InThePress />
    <DesignedFor />
  </section>
);

export default Home;
