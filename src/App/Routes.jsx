import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Foundation from 'features/Foundation';
import Sellers from 'features/Sellers';
import Suppliers from 'features/Suppliers';
import SoftwareVendors from 'features/SoftwareVendors';
import Main from 'features/Main';
import LifToken from 'features/LifToken';
import Community from 'features/StartupsAndDevelopers';

const Routes = () => (
  <Router>
    <Main>
      <Switch>
        <Route path="/foundation" component={Foundation} />
        <Route path="/suppliers" component={Suppliers} />
        <Route path="/sellers" component={Sellers} />
        <Route path="/software-vendors" component={SoftwareVendors} />
        <Route path="/lif-token" component={LifToken} />
        <Route path="/startups-and-developers" component={Community} />
      </Switch>
    </Main>
  </Router>
);

export default Routes;
