import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import KeyBenefits from 'commons/KeyBenefits';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import Solutions from 'commons/Solutions';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import {keyBenefitsDescriptions} from 'DATA/features/Sellers';

const Sellers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.sellers} />
    <Hero variant="sellers" />
    <KeyBenefits>
      {
        keyBenefitsDescriptions.keyBenefits.map(benefit => (
          <KeyBenefits.Benefit
            title={benefit.title}
            img={benefit.icon}
            body={benefit.body}
            key={benefit.title}
          />))
      }
    </KeyBenefits>
    <HowItWorks />
    <Solutions variant="sellers" />
    <SuscribeForUpdates />
    <ReadyToUse />
  </div>
);

export default Sellers;
