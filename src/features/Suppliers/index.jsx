/* @flow */
import React from 'react';
import BenefitsSection from 'commons/BenefitsSection';
import HowItWorks from 'commons/HowItWorks';
import PageHero from 'commons/PageHero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import SolutionsSection from 'commons/SolutionsSection';
import data from 'DATA/features/Suppliers';

const Suppliers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.suppliers} />
    <PageHero data={data.hero} />
    <BenefitsSection id="benefits" data={data.keyBenefitsDescriptions} />
    <HowItWorks id="howitworks" />
    <SolutionsSection id="sellers" data={data.solutions}>
      <PartnersAndContributors id="usecases" data={data.partners} />
    </SolutionsSection>
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />

  </div>
);

export default Suppliers;
