var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = 'src';
const outDir = 'static';
const outPath = path.resolve(__dirname, outDir);
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, srcDir),
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, srcDir, 'js', 'app.js'),
  ],
  output: {
    path: path.join(__dirname, outDir),
    publicPath: '/',
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: "js/[id].js",
  },
  resolve: {
    alias: {
      styles: 'assets/css/',
      images: 'assets/images/',
      layout: 'js/components/Layout/'
    },
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.html', '.css']
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loader: 'stripcomment'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.json/,
        loaders: ['json-loader']
      },
            {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?name=[path][name].[hash].[ext]&limit=10000',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?name=[path][name].[hash].[ext]&limit=10000&mimetype=image/jpg',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?name=[path][name].[hash].[ext]&limit=10000&mimetype=image/png',
      },
      {
        test: /\.svg/,
        loader: 'url-loader?name=[path][name].[hash].[ext]&limit=10000&mimetype=image/svg+xml',
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('development')
      },
      SRC_DIR: JSON.stringify(path.join(__dirname, srcDir))
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    }),
  ],
};
