/* @flow */
import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import HowItWorks from 'commons/HowItWorks';
import Solutions from './Solutions';
import keyBenefitsDescriptions from './keyBenefits.json';

const Suppliers = () => (
  <div>
    <KeyBenefits>
      {
        keyBenefitsDescriptions.keyBenefits.map((benefit) => {
          console.log(benefit);
          return (
            <KeyBenefits.Benefit
              title={benefit.title}
              img={benefit.icon}
              body={benefit.body}
              key={benefit.title}
            />);
        })
      }
    </KeyBenefits>
    <HowItWorks />
    <Solutions />
  </div>);

export default Suppliers;
