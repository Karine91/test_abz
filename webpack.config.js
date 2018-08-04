const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  const isProduction = env === "production";
  return {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": isProduction
          ? JSON.stringify("production")
          : JSON.stringify("development")
      })
    ]
  };
};
