import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Foundation from 'src/Foundation';
import Main from 'src/Main';


const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/Foundation/">Foundation</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={Main} />
        <Route path="/Foundation/" component={Foundation} />
      </div>
    </Router>
  );
  
  export default AppRouter;