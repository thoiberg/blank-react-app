const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'eslint']
        },
        {
          test: /\.json$/,
          loaders: ['json']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'postcss',
            'sass'
          ]
        }
      ]
    },

    eslint: {
      failOnWarning: false,
      failOnError: false
    },

    devServer: {
      hot: true,
      inline: true
    },

    resolve: {
      root: path.resolve(__dirname, 'src'),
      extensions: ['', '.js'],
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        React: path.resolve(__dirname, './node_modules/react')
      },
      fallback: path.resolve(__dirname, './node_modules')
    },

    postcss: () => {
    return [autoprefixer, precss]
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'app.bundle.js'
  }
}