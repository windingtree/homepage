// @flow
import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import PageHero from 'commons/PageHero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import data from 'DATA/features/SoftwareVendors';
import Collaborate from './Collaborate';

const SoftwareVendors = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.softwareVendors} />
    <PageHero data={data.hero} />
    <Collaborate id="collaborate" data={data.topSection} />
    <HowItWorks id="howitworks" />
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />
  </div>
);

export default SoftwareVendors;
