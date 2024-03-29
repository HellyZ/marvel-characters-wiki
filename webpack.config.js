const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  mode: "development", //production
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
}
