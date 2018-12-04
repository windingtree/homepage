/* @flow */
import React from 'react';

const Benefits = () => (
  <section className="pb-2 pb-md-3 mb-2 mb-md-3 border-bottom">
    <h6 className="mb-1 font-weight-bold small text-uppercase text-center text-md-left">
      Benefits
    </h6>
    <div className="solutions__integrations">
      <ul>
        <li>
          Take part in a truly open ecosystem from day 1 and have a direct influence on how
          eventual new solutions will work.
        </li>
        <li> Avoid limitations associated with use of legacy technology systems. </li>
        <li>
          Enable inventory distribution directly onto a supplier mobile app without any GDS
          or TMC involvement.
        </li>
        <li>
          Embed new service tags and pricing features in the Winding Tree layer which are
          invisible for the traditional distribution landscape.
        </li>
      </ul>
      <br />
      <ul className="list-inline d-flex flex-column d-md-block">
        <li className="list-inline-item my-1">
          <a href="https://github.com/windingtree/" className="btn btn-block btn-lg btn-light d-inline-flex align-items-center border text-capitalize">
            <i className="mdi mdi-24px mdi-github-box" />
            Our github
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Benefits;
