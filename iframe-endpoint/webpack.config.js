const path = require('path');

module.exports = {
  entry: './src/public/app.ts',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'src/public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
