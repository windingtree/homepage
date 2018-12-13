import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';

import '@windingtree/wt-ui/dist/styles.css';
import './assets/scss/styles.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Routes, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Routes', () => {
    // eslint-disable-next-line global-require
    const NextRootContainer = require('./Routes').default;
    ReactDOM.render(NextRootContainer);
  });
}
