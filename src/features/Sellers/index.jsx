import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import BenefitsSection from 'commons/BenefitsSection';
import PageHero from 'commons/PageHero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import SolutionsSection from 'commons/SolutionsSection';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import data from 'DATA/features/Sellers';

const Sellers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.sellers} />
    <PageHero data={data.hero} />
    <BenefitsSection id="benefits" data={data.keyBenefitsDescriptions} />
    <HowItWorks id="howitworks" />
    <SolutionsSection id="sellers" data={data.solutions}>
      <PartnersAndContributors id="usecases" />
    </SolutionsSection>
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />
  </div>
);

export default Sellers;
