// @flow
import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import Collaborate from './Collaborate';

const SoftwareVendors = () => (
  <div id="app-content">
    <Hero variant="softwareVendors" />
    <Collaborate />
    <HowItWorks />
    <SuscribeForUpdates />
    <ReadyToUse />
  </div>
);

export default SoftwareVendors;
