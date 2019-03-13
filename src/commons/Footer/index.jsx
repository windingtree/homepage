// @flow
import React from 'react';
import {
  Footer,
} from '@windingtree/wt-ui-react';
import { foundation, solutions, community } from 'DATA/commons/Footer';

const WTFooter = () => (
  <Footer
    copyrightText="Terms of service"
    copyrightHref="/TermsOfService.pdf"
  >
    <Footer.Solutions {...solutions} />
    <Footer.Comunity {...community} />
    <Footer.List {...foundation} />
    <Footer.Contacts />

  </Footer>
);

export default WTFooter;
