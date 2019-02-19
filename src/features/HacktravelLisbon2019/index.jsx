// @flow
import React from 'react';

import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';

import event from "DATA/features/Hacktravel-Lisbon-2019"

import EventPageHeroBanner from 'commons/EventPageHeroBanner';
import AccentedTextSection from 'commons/AccentedTextSection'
import ShortBenefits from 'commons/ShortBenefits'
import AttendeeCardsSection from 'commons/AttendeeCardsSection'

import VideoGallery from 'commons/VideoGallery';
import Events from 'commons/Events';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';



const HacktravelLisbon2019 = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <EventPageHeroBanner data={event.header}/>
    <ShortBenefits data={event.benefits}/>
    <AccentedTextSection data={event.about}/>
    <AttendeeCardsSection data={event.attendees}/>
    <VideoGallery />
    <Events />
    <SuscribeForUpdates />
    <ReadyToUse />
  </main>
);

export default HacktravelLisbon2019;
