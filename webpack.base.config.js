/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MonorepoResolver = require('@welldone-software/webpack-monorepo-resolver');

function getBaseConfig(
  {
    projectName,
    projPath,
    entry = 'index.tsx',
    dist: distFromArgs,
    port = (process.env.PORT || 3131),
    isDevelopment = process.env.NODE_ENV !== 'production',
  }
) {
  const pathFromRoot = path.join.bind(path, __dirname);
  const pathFromProj = path.join.bind(path, projPath);
  const dist = distFromArgs || pathFromProj('dist');

  console.log(`Compiling ${projectName}...`, {
    isDevelopment,
    projPath: pathFromProj('.'),
    rootPath: pathFromRoot('.'),
    dist,
  });

  const babelLoader = {
    test: /\.[t|j]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        root: pathFromRoot(),
        cacheDirectory: pathFromRoot(`.cache/${projectName}/babel`),
        plugins: ['react-hot-loader/babel'],
      },
    },
  };

  const styleLoader = {
    // vendor styles
    test: /\.s?css$/,
    include: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {loader: 'css-loader', options: {modules: false, sourceMap: isDevelopment}},
      {loader: 'sass-loader', options: {sourceMap: isDevelopment}},
    ],
  };

  const filesLoader = {
    test: /\.(png|jpg|ttf|otf|eot|woff|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name]-[md5:hash:hex:4].[ext]',
    },
  };

  const minimizerArray = [
    new TerserPlugin({
      sourceMap: true,
      cache: pathFromRoot(`.cache/${projectName}/webpack-terser`),
      parallel: true,
      terserOptions: {
        ecma: 5,
        warnings: false,
      },
    }),
  ];

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    stats: isDevelopment ? 'normal' : 'errors-warnings',
    bail: true,
    entry,
    devtool: 'source-map',
    output: {
      path: dist,
      publicPath: '/',
    },
    module: {
      rules: [
        babelLoader,
        styleLoader,
        filesLoader,
      ],
    },
    devServer: {
      historyApiFallback: true,
      port,
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: minimizerArray,
      noEmitOnErrors: true,
      splitChunks: {
        cacheGroups: {
          default: {
            name: 'main',
            chunks: 'all',
          },
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      plugins: [new MonorepoResolver()],
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css'],
      mainFields: ['module', 'browser', 'main'],
      modules: [
        pathFromProj('node_modules'),
        pathFromRoot('node_modules'),
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: pathFromProj('src/index.html'),
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        cwd: process.cwd(),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };

  return {
    config,
    babelLoader,
    styleLoader,
    filesLoader,
    minimizerArray,
  };
}

module.exports = getBaseConfig;
