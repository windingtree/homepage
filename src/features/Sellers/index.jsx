import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import KeyBenefits from 'commons/KeyBenefits';

const Sellers = () => (
  <div>
    <KeyBenefits>
      <KeyBenefits.OpenMarketplace />
      <KeyBenefits.SetYourCommission />
      <KeyBenefits.NetworkWithoutBorders />
      <KeyBenefits.ControlYourData />
      <KeyBenefits.PersonalizedTravel />
      <KeyBenefits.NewBusinessModel />
    </KeyBenefits>
    <HowItWorks />
  </div>);

export default Sellers;
