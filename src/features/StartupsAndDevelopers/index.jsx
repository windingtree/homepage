/* @flow */
import React from 'react';

import Contributors from 'commons/Contributors';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Events from 'commons/Events';
import PageHero from 'commons/PageHero';
import Banner from 'commons/Banner';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import VideoGallery from 'commons/VideoGallery';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import BuiltByCommunity from 'commons/BuiltByCommunity';
import BlockQuoteSection from 'commons/BlockQuoteSection';
import data from 'DATA/features/StartupsAndDevelopers';


const StartupsAndDevelopers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.community} />
    <PageHero data={data.hero} />
    <BlockQuoteSection data={data.quote} />
    <Banner id="opensource" data={data.communityBanner} />
    <PartnersAndContributors id="partners" data={data.partners} />
    <Contributors id="contributors" data={data.contributors} />
    <BuiltByCommunity id="builtbycommunity" data={data.communityProjects} />
    <Events id="events" />
    <VideoGallery id="video" />
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />
  </div>

);


export default StartupsAndDevelopers;
