// @flow
import React from 'react';
import {
  Footer,
} from '@windingtree/wt-ui-react';
import { foundation } from 'DATA/commons/Footer';

const WTFooter = () => (
  <Footer
    copyrightText="Terms of service"
    copyrightHref="/TermsOfService.pdf"
  >
    <Footer.Solutions />
    <Footer.Comunity />
    <Footer.List {...foundation} />
    <Footer.Contacts />

  </Footer>
);

export default WTFooter;
