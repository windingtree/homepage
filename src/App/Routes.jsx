import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'features/Home';
import Foundation from 'features/Foundation';
import Sellers from 'features/Sellers';
import Suppliers from 'features/Suppliers';
import SoftwareVendors from 'features/SoftwareVendors';
import Main from 'features/Main';
import LifToken from 'features/LifToken';
import Community from 'features/StartupsAndDevelopers';
import Page404 from 'features/Page404';
import ScrollHandler from './ScrollHandler';

const Routes = () => (
  <ScrollHandler>
    <Main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={['/foundation', '/foundation.html']} component={Foundation} />
        <Route path={['/suppliers', '/suppliers.html']} component={Suppliers} />
        <Route path={['/sellers', '/sellers.html']} component={Sellers} />
        <Route path={['/software-vendors', '/software-vendors.html']} component={SoftwareVendors} />
        <Route path={['/lif-token', '/lif-token.html']} component={LifToken} />
        <Route path={['/startups-and-developers', '/startups-and-developers.html']} component={Community} />
        <Route path="*" component={Page404} />
      </Switch>
    </Main>
  </ScrollHandler>
);


export default Routes;
