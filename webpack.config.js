const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.stdout.write('----------------------------------------------------------------\n');
process.stdout.write('---           invictus assignment, webpack scripts           ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('----------------------------------------------------------------\n');

module.exports = {
  entry: { 
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  mode: 'development',
  target: 'web',
  watch: true,
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src'), path.resolve(__dirname, 'vendor') ],
    extensions: [ '*', '.js', '.jsx', '.json', '.css', '.scss' ]
  },
  devtool: 'source-map', 
  plugins: [ 
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    /**
    new HtmlWebpackPlugin({ 
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true
    }),
     **/
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [ path.resolve(__dirname, 'src') ],
        use: [
          { loader: 'babel-loader', query: { presets: ['stage-3', 'react'] } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        include: [ 
          path.resolve(__dirname, 'node_modules/bootstrap/scss'),
          path.resolve(__dirname, 'src/styles') 
        ],
        use: [
          // { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          { loader: 'style-loader' }, 
          { loader: 'css-loader', options: { module: true } }, // translate css into js 
          { loader: 'postcss-loader', options: { plugins: () => [ require('autoprefixer')({ 'browsers': ['> 1%', 'last 2 versions']}) ]} },
          { loader: 'sass-loader' }, // compiles sass/scss to css 
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, mimetype: 'image/svg+xml' } }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' } }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    inline: true,
    hot: true,
    host: 'invictus-frontend-assignment.local',
    port: 8080,
  }
};
