import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import LifIco from './LifIco';
import keyBenefitsDescriptions from './keyBenefits.json';

const LifToken = () => (
  <>
    <KeyBenefits noHeader>
      <KeyBenefits.Lead>
        <header className="mb-2">
          {keyBenefitsDescriptions.lead}

        </header>
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