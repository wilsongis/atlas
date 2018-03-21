const path = require('path');

const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';

console.log('NODE_ENV:', env);

module.exports = {
  entry: {
    app: './src/main.js',
  },
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
  devServer: {
    contentBase: './public',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        },
      },
    ],
  },
  mode: process.env.NODE_ENV,
  optimization: {
    splitChunks: {
      cacheGroups: {
        mapboard: {
          test: /mapboard/,
          chunks: 'initial',
          name: 'mapboard',
          priority: 5,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
          priority: 10,
        },
      },
    },
  },
};
