/* @flow */
import React from 'react';
import {
  Button,
} from '@windingtree/wt-ui-react';

const Integrated = () => (
  <section className="pb-2 pb-md-3 mb-2 mb-md-3 border-bottom">
    <h6 className="mb-1 font-weight-bold small text-uppercase text-center text-md-left">
      Integrated software
    </h6>
    <div className="solutions__integrations">
      <p className="mb-1 text-center text-md-left">
        {
          `Don't have your own tech team? No problem, check out our list of already integrated
          third parties or reach out and we'll walk you through your integration with
          Winding Tree.`
        }
      </p>
      <ul className="list-inline d-flex flex-column d-md-block">
        <li className="list-inline-item my-1">
          <Button href="https://github.com/windingtree/" block size="lg" variant="light" className="d-inline-flex align-items-center border text-capitalize">
            <i className="mdi mdi-24px mdi-github-box" />
            Check out our demo app
          </Button>
        </li>
      </ul>
    </div>
  </section>
);

export default Integrated;
