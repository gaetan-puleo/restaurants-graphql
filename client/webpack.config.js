const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
		hot: true, // enable hot module reload
    port: 1234,
    watchContentBase: true,
  },
	devtool: 'eval-source-map',
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.module.s?css$/, // use scss with css
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
            	localIdentName: '[local]__[hash:base64:5]' // better lisibility
						},
          }
        }, 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}
