const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const dev = process.env.NODE_ENV === 'dev'
const config = require('./config.js')

// webpack.config.js
const webpackConfig = {
  resolve: {
    alias: {
      "@scss": path.resolve('./assets/scss/'),
      "@js": path.resolve('./assets/js/'),
      "@img": path.resolve('./assets/img/')
    }
  },
  entry: {
    app: ['@scss/app.scss', '@js/app.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public/dist/'),
    publicPath: "./public/"
  },
  devtool: dev ? "sourcemap" : "cheap-module-eval-source-map",
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
                  path: path.resolve('./build/postcss.config.js')
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
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: 'img/[name].[ext]',
      //         publicPath: function(url) {
      //           return url.replace(/img/, './../img');
      //         }
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         bypassOnDebug: true,
      //       }
      //     }
      //   ]
      // },
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
    new CopyWebpackPlugin([{
      from: 'assets/img',
      to: 'img'
    }]),
    new BrowserSyncPlugin({
      proxy: config.bsProxyUri,
      open: config.bsOpenTheBrowser,
      port: config.bsPort,
      files: config.bsFilesToWatch,
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      },
      injectChanges: false,
      logFileChanges: false,
      logLevel: 'debug',
      logPrefix: 'webpack',
      notify: false,
      reloadDelay: 0
    })
  ]
}

if (!dev) {
  webpackConfig.plugins.push(
    new UglifyJsPlugin({ sourceMap: true }),
    new OptimizeCssAssetsPlugin()
  )
}

module.exports = webpackConfig
