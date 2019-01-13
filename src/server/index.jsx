import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import App from 'App/Routes';
import templateFn from './template';

export default (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <Router context={context} location={req.url}>
      <App />
    </Router>,
  );
  const template = templateFn(html);
  res.send(template);
};
