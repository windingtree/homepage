// @flow
import React from 'react';
import VideoGallery from 'commons/VideoGallery';
import Events from 'commons/Events';
import Banner from 'commons/Banner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import HowItWorks from 'commons/HowItWorks';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Slicks from 'commons/Slick';
import InThePress from 'commons/InThePress';
import VerticalTabs from 'commons/VerticalTabs';
import MainPageHeroBanner from 'commons/MainPageHeroBanner';
import data from 'DATA/features/Home';


const Home = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <MainPageHeroBanner data={data.hero} />
    <VerticalTabs id="features" data={data.features} />
    <HowItWorks id="howitworks" data={data.howItWorks} />
    <PartnersAndContributors id="partners" data={data.partners}>
      <Slicks />
    </PartnersAndContributors>
    <InThePress id="press" data={data.press} />
    <Banner id="opensource" data={data.communityBanner} />
    <VideoGallery id="video" data={data.videoGallery} />
    <Events id="events" data={data.events} />
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" data={data.readyToUse} />
  </main>
);

export default Home;
