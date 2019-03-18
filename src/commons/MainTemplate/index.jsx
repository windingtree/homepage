// @flow
import React from 'react';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Gdpr from 'commons/Gdpr';
import Footer from 'commons/Footer';
import TopMenu from 'commons/TopMenu';

type PropsType = {
  children: React$Node
};

const MainTemplate = ({ children }: PropsType) => (
  <div>
    <CustomHelmet {...metadata.default} />
    <TopMenu />
    <Gdpr />
    {children}
    <Footer />
  </div>
);

export default MainTemplate;
