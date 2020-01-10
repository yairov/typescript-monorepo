const MonorepoResolver = require('@welldone-software/webpack-monorepo-resolver');

module.exports = {
  resolve: {
    plugins: [new MonorepoResolver()],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css'],
    mainFields: ['module', 'browser', 'main'],
    modules: ['node_modules'],
    alias: {
      storybook: `${__dirname}/storybook`,
    },
  },
};
