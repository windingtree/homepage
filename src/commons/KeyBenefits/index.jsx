/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import ControlYourData from './ControlYourData';
import ImmediateSettlement from './ImmediateSettlement';
import NetworkWithoutBorders from './NetworkWithoutBorders';
import NewBusinessModel from './NewBusinessModel';
import NoFakeReviews from './NoFakeReviews';
import OpenMarketplace from './OpenMarketplace';
import PersonalizedTravel from './PersonalizedTravel';
import SetYourCommission from './SetYourCommission';

type PropsType = {
  children: React$Node
};

const KeyBenefits = (props: PropsType) => {
  const { children } = props;
  return (
    <section className="key-benefits py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <h2 className="text-center">Key Benefits</h2>
          </Col>
          {children}
        </Row>
      </Container>
    </section>
  );
};

KeyBenefits.ControlYourData = ControlYourData;
KeyBenefits.ImmediateSettlement = ImmediateSettlement;
KeyBenefits.NetworkWithoutBorders = NetworkWithoutBorders;
KeyBenefits.NewBusinessModel = NewBusinessModel;
KeyBenefits.NoFakeReviews = NoFakeReviews;
KeyBenefits.OpenMarketplace = OpenMarketplace;
KeyBenefits.PersonalizedTravel = PersonalizedTravel;
KeyBenefits.SetYourCommission = SetYourCommission;

export default KeyBenefits;
