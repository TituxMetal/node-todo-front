const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const config = require('./config.js')

const webpackConfig = {
  resolve: {
    alias: {
      "@scss": path.resolve('./resources/scss/'),
      "@js": path.resolve('./resources/js/'),
      "@img": path.resolve('./resources/img/')
    }
  },
  entry: {
    app: ['@scss/app.scss', '@js/app.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public/'),
    publicPath: "./public"
  },
  devtool: "sourcemap",
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: path.resolve('./webpack/postcss.config.js')
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/css/[name].css'
    }),
    // new CopyWebpackPlugin([{
    //   from: 'assets/img',
    //   to: 'img'
    // }]),
    new BrowserSyncPlugin({
      proxy: config.bsProxyUri,
      open: config.bsOpenTheBrowser,
      port: config.bsPort,
      files: config.bsFilesToWatch,
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: true
      },
      injectChanges: true,
      logFileChanges: false,
      logLevel: 'debug',
      logPrefix: 'webpack',
      notify: false,
      reloadDelay: 0
    })
  ]
}

module.exports = webpackConfig
