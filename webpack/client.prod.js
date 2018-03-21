const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
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
    path: path.join(__dirname, '../dist'),
    filename: './js/app.js',
    publicPath: '/dist',
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        use: [{
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
        }],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
        }
      }]
    }
  ]},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({sourceMap: true}),
    new OptimizeCssAssetsPlugin(),
    new ExtractTextPlugin('css/app.css'),
  ],
};
