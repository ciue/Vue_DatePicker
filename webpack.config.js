const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
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
      "@" : path.resolve(__dirname, 'src/'),
    }
  },

  devServer: {
    contentBase: './dist',
    port: '8888',
    open: true,
  },
}


// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: '[name].js'
//   },
//   module: {
//     rules: [{
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader'
//         ],
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },

//   plugins: [
//     // new VueLoaderPlugin(),
//     new HtmlwebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//     })
//   ],

//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },

//   devServer: {
//     contentBase: './dist',
//     port: '8888',
//     open: true,
//   },



//   devtool: '#eval-source-map'
// }