module.exports = {
  entry: './app.jsx',
  output: {
    publicPath: 'http://localhost:3000/assets'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
}
