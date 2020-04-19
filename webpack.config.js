const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: false,
    port: 4200,
    overlay: true,
    contentBase: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: ['file-loader', 'extract-loader', 'html-loader'],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'JS-BASICS',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app-root',
      scripts: [
        {
          src: 'main.bundle.js',
          type: 'module',
        },
      ],
    }),
  ],
};
