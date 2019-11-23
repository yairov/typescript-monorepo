module.exports = {
  verbose: true,
  rootDir: '../',
  resolver: 'jest-webpack-resolver',
  setupFilesAfterEnv: ['jest/jestSetupAfterEnv.js'],
  moduleNameMapper: {
    '\\.(s?css)$':
      'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest/mocks/stringContent.js',
  },
};
