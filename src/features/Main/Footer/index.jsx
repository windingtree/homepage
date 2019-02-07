// @flow
import React from 'react';
import {
  Footer,
} from '@windingtree/wt-ui-react';
import { foundation } from 'DATA/features/Footer';

const WTFooter = () => (
  <Footer
    copyrightText="Terms of service"
    copyrightHref="/TermsOfService.pdf"
  >
    <Footer.Solutions />
    <Footer.LifToken />
    <Footer.List {...foundation} />
    <Footer.Contacts />
    <Footer.Comunity />
  </Footer>
);

export default WTFooter;
