const getBaseConfig = require('../../webpack.base.config');

const {config} = getBaseConfig({
  projectName: 'wd-main',
  projPath: __dirname,
});

module.exports = config;
