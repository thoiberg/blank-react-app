const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                failOnWarning: false,
                failOnError: false
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },

    devServer: {
      hot: true,
      inline: true
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ],

    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js'],
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        React: path.resolve(__dirname, './node_modules/react')
      }
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'app.bundle.js'
  }
}
