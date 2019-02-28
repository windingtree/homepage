
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
import DescriptonWithGallery from 'commons/DescriptionWithGallery';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -70, scrollDuration: 400 });

const event = Hacktravel;

const HacktravelLisbon2019 = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />

    <EventPageHeroBanner data={event.header} />
    <ShortBenefits data={event.benefits} id="benefits" />
    <DescriptonWithGallery data={event.about} photos={event.photos} />
    <AttendeeCardsSection data={event.attendees} id="register" />
    <AccentedTextSection data={event.sponsors} id="sponsors" />
    <VideoGallerySimple data={event.videoGallery} id="video" />
    <AccentedTextSection data={event.callToAction} id="ready" />
    <ContactSection data={event.contacts} id="contacts" />


  </main>
);

export default HacktravelLisbon2019;
