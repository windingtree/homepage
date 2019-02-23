/* @flow */
import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import HowItWorks from 'commons/HowItWorks';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Solutions from 'commons/Solutions';
import keyBenefitsDescriptions from 'DATA/features/Suppliers';

const Suppliers = () => (
  <div id="app-content">
    <CustomHelmet {...metadata.suppliers} />
    <Hero variant="suppliers" />
    <KeyBenefits  id="benefits">
      {keyBenefitsDescriptions.map(benefit => (
        <KeyBenefits.Benefit
          title={benefit.title}
          img={benefit.icon}
          body={benefit.body}
          key={benefit.title}
        />))}
    </KeyBenefits>
    <HowItWorks  id="howitworks"/>
    <Solutions variant="suppliers"  id="solutions"/>
    <SuscribeForUpdates  id="subscribe"/>
    <ReadyToUse  id="ready"/>

  </div>
);

export default Suppliers;
