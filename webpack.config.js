const path = require('path')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: "./font-awesome/icons.js",
  output: {
    path: path.resolve(__dirname, "static/scripts/"),
    filename: "fontawesome-custom.js",
  },
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin({
        uglifyOptions: {
          compress: {
            collapse_vars: false,
          },
        },
      }),
    ],
  },
};
