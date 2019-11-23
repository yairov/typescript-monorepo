const isTestEnv = process.env.NODE_ENV === 'test';
const useESModules = !isTestEnv;

module.exports = {
  sourceType: 'unambiguous',
  presets: [
    ['@babel/preset-env', {
      // polyfilling is done as a third party script polyfill instead
      modules: useESModules ? false : 'commonjs',
      useBuiltIns: false,
      include: [
        // remove when `https://github.com/babel/babel/issues/7022` is solved
        '@babel/plugin-transform-classes',
      ],
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', {
      // "true" means that Object.assign would be used instead of a babel's helper
      useBuiltIns: true,
    }],
    ['transform-imports', {
      lodash: {
        // eslint-disable-next-line no-template-curly-in-string
        transform: 'lodash-es/${member}',
        preventFullImport: true,
      },
    }],
    ['@babel/plugin-transform-runtime', {
      // no polyfilling
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules,
    }],
    'react-hot-loader/babel',
  ],
};
