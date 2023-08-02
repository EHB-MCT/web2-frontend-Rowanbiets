const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production build
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: require.resolve('chessboardjs'),
        loader: 'babel-loader',
        options: {
          type: 'commonjs',
         exposes: 'single ChessBoard', // Export only the ChessBoard object
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      
    ],
    
  },
};
