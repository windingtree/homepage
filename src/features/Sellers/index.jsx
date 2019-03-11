import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import KeyBenefits from 'commons/KeyBenefits';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import Solutions from 'commons/Solutions';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import keyBenefitsDescriptions from 'DATA/features/Sellers';

const Sellers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.sellers} />
    <Hero variant="sellers" />
    <KeyBenefits id="benefits">
      {
        keyBenefitsDescriptions.map(benefit => (
          <KeyBenefits.Benefit
            title={benefit.title}
            img={benefit.icon}
            body={benefit.body}
            key={benefit.title}
          />
        ))
      }
    </KeyBenefits>
    <HowItWorks id="howitworks" />
    <Solutions variant="sellers" id="sellers" />
    <SuscribeForUpdates id="subscribe" />
    <ReadyToUse id="ready" />
  </div>
);

export default Sellers;
