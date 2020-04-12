const express = require('express');
const webpack = require('webpack');
const path = require('path');
const requireFromString = require('require-from-string');
const MemoryFS = require('memory-fs');
const serverConfig = require('./webpack/webpack.config.server.js');

const fs = new MemoryFS();
const outputErrors = (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
};
console.log('Initializing server application...');
console.log('Compiling bundle...');
serverConfig.then((config) => {
  const serverCompiler = webpack(config);
  serverCompiler.outputFileSystem = fs;
  serverCompiler.run((err, stats) => {
    const server = express();
    server.use(express.static(path.resolve(__dirname, './public')));
    outputErrors(err, stats);
    const contents = fs.readFileSync(path.resolve(config.output.path, config.output.filename), 'utf8');
    const app = requireFromString(contents, config.output.filename);
    server.get('/*', app.default);
    module.exports = server.listen(3000);
    console.log('Server listening on port 3000!');
  });
});
