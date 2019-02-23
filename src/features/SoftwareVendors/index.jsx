// @flow
import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Collaborate from './Collaborate';

const SoftwareVendors = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.softwareVendors} />
    <Hero variant="softwareVendors" />
    <Collaborate  id="collaborate"/>
    <HowItWorks  id="howitworks"/>
    <SuscribeForUpdates  id="subscribe"/>
    <ReadyToUse  id="ready"/>
  </div>
);

export default SoftwareVendors;
