/* @flow */
import React from 'react';
import Subscribe from './Subscribe';
import JoinComunity from './JoinComunity';

const SuscribeForUpdates = () => (
  <div className="app-section section-actions bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg">
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
