/* @flow */
import React from 'react';

const Column = (props: *) => {
  const { data } = props;
  return (
    <div className="col-6 col-md-3">
      <dl className="mb-1">
        <dt className="mb-1">{data.title}</dt>
        <dd>
          <nav className="nav flex-column small">
            {data.links.map(item => (

              item.href !== undefined
                ? (
                  item.href.startsWith('http')
                    ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link footer-link px-0 text-white text--alpha-inverse">{item.text}</a>
                    )
                    : (<a href={item.href} className="nav-link footer-link px-0 text-white text--alpha-inverse">{item.text}</a>
                    )


                )
                : (
                  <p className="nav-link px-0 text-white text--alpha-inverse">{item.text}</p>
                )


            ))}

          </nav>
        </dd>
      </dl>
    </div>
  );
};

export default Column;
