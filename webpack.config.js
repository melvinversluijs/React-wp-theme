const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  target: "web",
  entry: {
    main: "./frontend/src/main.js"
  },
  output: {
    path: `${__dirname}/frontend/dist`,
    publicPath: "/",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: ["url-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
