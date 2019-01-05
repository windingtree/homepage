/* @flow */
import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import HowItWorks from 'commons/HowItWorks';
import Hero from 'commons/Hero';

import Solutions from './Solutions';
import keyBenefitsDescriptions from './keyBenefits.json';

const Suppliers = () => (
  <>
    <Hero variant="suppliers" />
    <KeyBenefits>
      {keyBenefitsDescriptions.keyBenefits.map(benefit => (
        <KeyBenefits.Benefit
          title={benefit.title}
          img={benefit.icon}
          body={benefit.body}
          key={benefit.title}
        />))}
    </KeyBenefits>
    <HowItWorks />
    <Solutions />
  </>
);

export default Suppliers;
