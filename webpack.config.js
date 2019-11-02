const path = require("path");
const webpack = require("webpack");

// require("babel-regster");
require("@babel/register");

// plugins
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/main.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|bmp|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // limit: 8000,
              limit: 1,
              // name: "images/[hash]-[name].[ext]"
              name: "view/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              removeComments: true,
              minimize: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "index.html"),
    //   filename: "index.html",
    //   inject: "body",
    //   hash: true,
    //   minify: {
    //     // collapseWhitespace: true,
    //     removeComments: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true
    //   }
    // }),
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    // new DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: '"development"',
    //     BASE_URL: '"/"'
    //   }
    // }),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      templateParameters: (compilation, assets, pluginOptions) => {
        // enhance html-webpack-plugin's built in template params
        let stats;
        return Object.assign(
          {
            // make stats lazy as it is expensive
            get webpack() {
              return stats || (stats = compilation.getStats().toJson());
            },
            compilation: compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              files: assets,
              options: pluginOptions
            }
          },
          resolveClientEnv(options, true /* raw */)
        );
      },
      template: path.join(__dirname, "public/index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: "public/assets/resources",
        to: "."
      }
    ]),
    new FaviconsWebpackPlugin({
      logo: "./public/assets/favicon/asterics-logo.png",
      prefix: "assets/favicon/",
      // statsFilename: 'assets/iconstats.json',
      inject: true,
      background: "#ffffff",
      title: "WebACS",
      appDescription: "AsTeRICS Configuration Suite",
      display: "browser",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    })
  ],
  // mode: "production",
  // watch: true,
  devtool: "source-map"
};
