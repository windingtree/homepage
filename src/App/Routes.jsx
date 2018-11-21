import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Foundation from 'features/Foundation';
import Main from 'features/Main';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/foundation" component={Foundation} />
            <Route path="/" exact component={Main} />
        </Switch>
    </Router>
);

export default Routes