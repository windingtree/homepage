/* @flow */
import React from 'react';
import IconList from './IconList';
import Copyright from './Copyright';
import Logo from './Logo';
import Column from './Column';
import './styles.scss';

const WTFooter = (props: *) => {
  const { data } = props;
  return (
    <footer className="footer bg-accent text-white">
      <div className="container">
        <div className="footer__row pt-2 pb-1">
          <div className="row">
            <Logo data={data.Logo} />
            <div className="col-md-8">
              <div className="row">

                {data.Columns.map(column => (
                  <Column data={column} />
                ))}

              </div>
            </div>
          </div>
        </div>

        <hr className="text-alpha" />
        <div className="py-1">
          <div className="d-flex flex-column-reverse flex-md-row align-items-center">
            <Copyright text={data.Copyright.text} href={data.Copyright.link} />
            <IconList />
          </div>
        </div>
      </div>
    </footer>
  );
};


export default WTFooter;
