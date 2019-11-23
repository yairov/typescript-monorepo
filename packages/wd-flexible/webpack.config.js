const path = require('path');

const getBaseConfig = require('../../webpack.base.config');

const {config} = getBaseConfig({
  projectName: 'wd-flexible',
  projPath: __dirname,
  entry: path.join(__dirname, 'src', 'index.tsx'),
});

module.exports = config;
