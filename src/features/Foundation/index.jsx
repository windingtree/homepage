// @flow
import React from 'react';
import Banner from 'commons/Banner';
import Events from 'commons/Events';
import PageHero from 'commons/PageHero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import VideoGallery from 'commons/VideoGallery';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import { members, advisors } from 'DATA/commons/Team';
import Team from 'commons/Team';
import Roadmap from 'commons/Roadmap';
import data from 'DATA/features/Foundation';
import About from './About';


const Foundation = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.foundation} />
    <PageHero data={data.hero} />
    <About id="about" data={data.about} />

    <Banner id="lif" data={data.lifsection} />

    <Team title="Team" members={members} id="team" data={data.team} />
    <Team title="Advisors" members={advisors} id="advisors" data={data.advisors} />
    <VideoGallery id="video" />
    <Banner id="services" data={data.servicesBanner} />
    <Roadmap id="roadmap" />
    <Events id="events" />
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />
  </main>
);

export default Foundation;
