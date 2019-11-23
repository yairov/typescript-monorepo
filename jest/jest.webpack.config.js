const path = require('path');
const MonorepoResolver = require('@welldone-software/webpack-monorepo-resolver');

const rootPath = path.join.bind(path, __dirname, '..');

module.exports = {
  resolve: {
    plugins: [
      new MonorepoResolver(),
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css'],
    modules: [
      rootPath(),
      rootPath('jest'),
      rootPath('node_modules'),
    ],
  },
};
