/* @flow */
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Subscribe from './Subscribe';
import JoinComunity from './JoinComunity';


const SuscribeForUpdates = (props: *) => {
  const { id } = props;

  return (
    <ScrollableAnchor id={id}>
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
    </ScrollableAnchor>);
};

export default SuscribeForUpdates;
