
import React from 'react';

import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Hacktravel from 'DATA/features/HacktravelLisbon2019';
import EventPageHeroBanner from 'commons/EventPageHeroBanner';
import AccentedTextSection from 'commons/AccentedTextSection';
import ShortBenefits from 'commons/ShortBenefits';
import AttendeeCardsSection from 'commons/AttendeeCardsSection';
import VideoGallerySimple from 'commons/VideoGallerySimple';
import ContactSection from 'commons/ContactSection';
import ReadyToUse from 'commons/ReadyToUse';

const event = Hacktravel;

const HacktravelLisbon2019 = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <EventPageHeroBanner data={event.header} />
    <ShortBenefits data={event.benefits} />
    <AccentedTextSection data={event.about} />
    <AttendeeCardsSection data={event.attendees} />
    <AccentedTextSection data={event.sponsors} />
    <VideoGallerySimple data={event.videoGallery} />
    <ContactSection data={event.contacts} />
    <ReadyToUse />
  </main>
);

export default HacktravelLisbon2019;
