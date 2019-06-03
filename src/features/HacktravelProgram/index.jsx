
import React from 'react';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';

import Hacktravel from 'DATA/features/HacktravelLisbon2019';
import EventPageHeroBanner from 'commons/EventPageHeroBanner';

const event = Hacktravel;

const HacktravelProgram = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    
    <section className="short-banner-bg py-4" >
        <h1 className="mt-4 text-center text-white">#HackTravel Lisbon 2019 Program</h1>
        
    </section>
    <div>Hello man</div>
  </main>
);

export default HacktravelProgram;
