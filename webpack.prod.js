const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hand curated Chuck Norris facts!',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      filename: 'html/about.html',
      template: path.resolve(__dirname, './src/html/about.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Contents',
      filename: 'html/contents.html',
      template: path.resolve(__dirname, './src/html/contents.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
  // 5
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader'],
      },
      // CSS and SASS
      {
        test: /\.(scss|css)$/, // load files that end with scss and css
        use: [
          // 'style-loader', // Step 3 (option 1): inject styles into DOM -> used in dev
          MiniCssExtractPlugin.loader, // Step 3 (option 2): extract css into files -> used in prod
          'css-loader', // Step 2: turn css into commonjs
          'sass-loader', // Step 1: turn sass into css
        ],
      },
      { // define typescript loader and file extensions
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts'], // files to load
  },
};
