const ExtractTextPlugin      = require("extract-text-webpack-plugin"),
      path                   = require("path"),
      WebpackDeletePlugin    = require("webpack-delete-plugin");

const files = {
  app: "./src/assets/js/main.js",
  main: "./src/assets/scss/main.scss"
}

const config = {
  entry: files,
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              emitFile: false,
              publicPath: '../img/'
            }
          }
        ]
      },
      // Sass Processing
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader"
        })
      },
      // JS Processing
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }
    ]
  },
  output: {
    // Outputs to /src/, this isn't for a final build.
    path: path.resolve(__dirname + "/src"),
    filename: "[name].js"
  },
  plugins: [
    require('autoprefixer'),
    new ExtractTextPlugin("./public/css/[name].css"),
    new WebpackDeletePlugin(["./src/main.js"])
  ]
}

module.exports = config;