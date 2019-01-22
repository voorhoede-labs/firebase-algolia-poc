var path = require('path')
var webpack = require('webpack')
var dotenv = require('dotenv-safe').config({path: __dirname + '/.env'});
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    ALGOLIA_APP_ID: JSON.stringify(dotenv.parsed.ALGOLIA_APP_ID),
    ALGOLIA_API_KEY: JSON.stringify(dotenv.parsed.ALGOLIA_API_KEY),
    FIRESTORE_API_KEY: JSON.stringify(dotenv.parsed.FIRESTORE_API_KEY),
    FIRESTORE_AUTHDOMAIN: JSON.stringify(dotenv.parsed.FIRESTORE_AUTHDOMAIN),
    FIRESTORE_DATABASE_URL: JSON.stringify(dotenv.parsed.FIRESTORE_DATABASE_URL),
    FIRESTORE_PROJECTID: JSON.stringify(dotenv.parsed.FIRESTORE_PROJECTID),
    FIRESTORE_STORAGEBUCKET: JSON.stringify(dotenv.parsed.FIRESTORE_STORAGEBUCKET),
    FIRESTORE_MESSAGING_SENDER_ID: JSON.stringify(dotenv.parsed.FIRESTORE_MESSAGING_SENDER_ID),
  })
])

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      },
    }),
    new UglifyJsPlugin({
      "uglifyOptions": {
        compress: {
            warnings: false
        },
        sourceMap: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ])
}