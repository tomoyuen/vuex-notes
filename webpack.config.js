const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: `[name]${devMode ? '' : '.[hash]'}.js`,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      components: resolve('src/components'),
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
        },
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?window.jQuery',
      },
      {
        test: require.resolve('pen'),
        loader: 'exports-loader?window.Pen',
      },
    ]
  },
  devtool: devMode ? 'cheap-module-eval-source-map' : false,
  target: 'web',
  devServer: {
    compress: true,
    hot: true,
    port: process.env.PORT || 8080,
  },
  plugins: [
    devMode && new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
}
