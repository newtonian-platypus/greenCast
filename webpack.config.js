var path = require('path');

module.exports = {
  entry: "./app/components/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        resolveLoader: {
          root: path.join(__dirname, 'node_modules')
        },
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}