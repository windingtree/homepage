
import React from 'react';

import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Hacktravel from 'DATA/features/HacktravelLondon2019';
import EventPageHeroBanner from 'commons/EventPageHeroBanner';
import AccentedTextSection from 'commons/AccentedTextSection';
import ShortBenefits from 'commons/ShortBenefits';
import VideoGallerySimple from 'commons/VideoGallerySimple';
import ContactSection from 'commons/ContactSection';
import DescriptonWithGallery from 'commons/DescriptionWithGallery';
import LocationBlock from 'commons/LocationBlock';
import LogosGallery from 'commons/LogosGallery';
import ShortCardSection from 'commons/ShortCardSection';

const event = Hacktravel;

const HacktravelLondon2019 = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />
    <EventPageHeroBanner data={event.header} />
    <ShortBenefits data={event.benefits} id="benefits" />
    <DescriptonWithGallery data={event.about} photos={event.photos} id="about" />
    <AccentedTextSection data={event.hackathonProgram} id="program" />
    <AccentedTextSection data={event.sponsors} id="sponsors" />
    <ShortCardSection data={event.challenges} id="challenges" />
    <VideoGallerySimple data={event.videoGallery} id="video" />
    <LogosGallery data={event.hackedWithUs} id="hacked-with-us" />
    <LocationBlock data={event.location} id="location" />
    <AccentedTextSection data={event.callToAction} id="ready" />
    <ContactSection data={event.contacts} id="contacts" />
  </main>
);

export default HacktravelLondon2019;
