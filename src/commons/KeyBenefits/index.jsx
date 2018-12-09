/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import ControlYourData from './ControlYourData';
import ImmediateSettlement from './ImmediateSettlement';
import Lead from './Lead';
import NetworkWithoutBorders from './NetworkWithoutBorders';
import NewBusinessModel from './NewBusinessModel';
import NoFakeReviews from './NoFakeReviews';
import OpenMarketplace from './OpenMarketplace';
import PaymentsOnPlatform from './PaymentsOnPlatform';
import PersonalizedTravel from './PersonalizedTravel';
import PlatformGovernance from './PlatformGovernance';
import SetYourCommission from './SetYourCommission';

type PropsType = {
  children: React$Node,
  noHeader: boolean
};

const KeyBenefits = (props: PropsType) => {
  const { children, noHeader } = props;
  const Header = noHeader
    ? null
    : (
      <Col md={12}>
        <h2 className="text-center">Key Benefits</h2>
      </Col>
    );
  return (
    <section className="key-benefits py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          {Header}
          {children}
        </Row>
      </Container>
    </section>
  );
};

KeyBenefits.defaultProps = {
  noHeader: false,
};

KeyBenefits.ControlYourData = ControlYourData;
KeyBenefits.ImmediateSettlement = ImmediateSettlement;
KeyBenefits.Lead = Lead;
KeyBenefits.NetworkWithoutBorders = NetworkWithoutBorders;
KeyBenefits.NewBusinessModel = NewBusinessModel;
KeyBenefits.NoFakeReviews = NoFakeReviews;
KeyBenefits.OpenMarketplace = OpenMarketplace;
KeyBenefits.PaymentsOnPlatform = PaymentsOnPlatform;
KeyBenefits.PersonalizedTravel = PersonalizedTravel;
KeyBenefits.PlatformGovernance = PlatformGovernance;
KeyBenefits.SetYourCommission = SetYourCommission;

export default KeyBenefits;
