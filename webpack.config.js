const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
  },
  ignoreWarnings: [
    {
      module: /\.\/src\/style\.scss/,
    },
    {
      message: /entrypoint size limit/,
    },
    {
      message: /webpack performance recommendations/,
    },
  ],
};
