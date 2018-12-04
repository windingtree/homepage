/* @flow */
import React from 'react';

const AlreadyJoined = () => (
  <section className="pb-2 pb-md-3 mb-2 mb-md-3 border-bottom">
    <h6 className="mb-1 font-weight-bold small text-uppercase text-center text-md-left">
      Already joined&nbsp;us
    </h6>
    <div className="solutions__partners">
      <div className="row align-items-center">
        <div className="col-6 col-md-3 text-center">
          <a href="https://www.lufthansagroup.com/">
            <img src="/assets/img/partners/lufthansa-group.png" alt="Lufthansa group" className="my-1 img-fluid" />
          </a>
        </div>
        <div className="col-6 col-md-3 text-center">
          <a href="http://swissport.com/">
            <img src="/assets/img/partners/slider-1/swiss.svg" alt="Swissport" className="my-1 img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AlreadyJoined;
