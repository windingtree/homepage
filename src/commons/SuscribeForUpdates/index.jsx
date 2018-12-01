/* @flow */
import React from 'react';
import Subscribe from './Subscribe';
import JoinComunity from './JoinComunity';

const SuscribeForUpdates = () => (
  <div className="actions py-3 py-md-5 bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg mb-2 mb-md-0">
          <Subscribe />
        </div>
        <div className="col-lg">
          <JoinComunity />
        </div>
      </div>
    </div>
  </div>
);

export default SuscribeForUpdates;
