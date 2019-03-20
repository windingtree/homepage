// @flow
import React from 'react';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Gdpr from 'commons/Gdpr';
import Footer from 'commons/PageFooter';
import TopMenu from 'commons/TopMenu';
import footerData from 'DATA/commons/Footer';
import menuData from 'DATA/commons/TopMenu';

type PropsType = {
  children: React$Node
};

const MainTemplate = ({ children }: PropsType) => (
  <div>
    <CustomHelmet {...metadata.default} />
    <TopMenu data={menuData} />
    <Gdpr />
    {children}
    <Footer data={footerData} />
  </div>
);

export default MainTemplate;
