/* @flow */
import React from 'react';
import HowItWorks from 'commons/HowItWorks';
import KeyBenefits from 'commons/KeyBenefits';
import Solutions from './Solutions';

const Suppliers = () => (
  <div>
    <KeyBenefits>
      <KeyBenefits.OpenMarketplace />
      <KeyBenefits.ImmediateSettlement />
      <KeyBenefits.NetworkWithoutBorders />
      <KeyBenefits.ControlYourData />
      <KeyBenefits.NoFakeReviews />
      <KeyBenefits.NewBusinessModel />
    </KeyBenefits>
    <HowItWorks />
    <Solutions />
  </div>);

export default Suppliers;
