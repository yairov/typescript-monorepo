const path = require('path');
const MonorepoResolver = require('@welldone-software/webpack-monorepo-resolver');

const pathFromRoot = path.join.bind(path, __dirname, '..');

module.exports = ({config}) => {
  // this keeps module names on production to allow sorting stories by package name
  config.optimization.namedModules = true;

  // config.module.rules.push({
  //   test: /\.stories\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('@storybook/source-loader'),
  //       options: {parser: 'typescript'},
  //     },
  //   ],
  //   include: pathFromRoot(),
  //   enforce: 'pre',
  // });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {localIdentName: '[path]--[name]__[local]'},
        },
      },
      {
        loader: 'sass-loader',
        options: {sourceMap: true},
      },
    ],
  });

  config.resolve.modules.push(pathFromRoot());
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.plugins = config.resolve.plugins || [];
  config.resolve.plugins.push(new MonorepoResolver());

  const scriptFilesLoader = config.module.rules.find(rule => rule.test.toString().includes('js'));
  scriptFilesLoader.test = /\.(ts|js)x?$/;
  scriptFilesLoader.use[0].options.cacheDirectory = false;
  scriptFilesLoader.use[0].options.root = pathFromRoot();
  scriptFilesLoader.exclude = /node_modules/;

  return config;
};
