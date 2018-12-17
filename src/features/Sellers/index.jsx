import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import KeyBenefits from 'commons/KeyBenefits';
import keyBenefitsDescriptions from './keyBenefits.json';

const Sellers = () => (
  <div>
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
  </div>);

export default Sellers;
