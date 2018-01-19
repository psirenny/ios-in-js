// @flow

/* eslint-disable import/no-extraneous-dependencies */

import WebpackPluginHtml from 'html-webpack-plugin';
import { join as pathJoin } from 'path';

export default {
  entry: {
    src: pathJoin(__dirname, 'test/index.js'),
  },
  output: {
    filename: 'index.js',
    path: pathJoin(__dirname, 'dist/index.js'),
  },
  plugins: [
    new WebpackPluginHtml({
      template: pathJoin(__dirname, 'test/index.html'),
    }),
  ],
};
