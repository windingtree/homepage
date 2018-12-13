import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import LifIco from './LifIco';
import keyBenefitsDescriptions from './keyBenefits.json';

const LifToken = () => (
  <>
    <KeyBenefits noHeader>
      <KeyBenefits.Lead>
        {keyBenefitsDescriptions.lead}
      </KeyBenefits.Lead>
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
    <LifIco />
  </>
);

export default LifToken;
