import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import LifIco from './LifIco';

const LifToken = () => (
  <>
    <KeyBenefits noHeader>
      <KeyBenefits.Lead>
        Líf is the most important underlying technology of the Winding Tree platform.
        It is used for two purposes:
      </KeyBenefits.Lead>
      <KeyBenefits.PaymentsOnPlatform />
      <KeyBenefits.PlatformGovernance />
    </KeyBenefits>
    <LifIco />
  </>
);

export default LifToken;
