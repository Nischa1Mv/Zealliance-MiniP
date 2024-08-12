const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    alias: {
      component: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      reducers: path.resolve(__dirname, "src/reducers"),
      saga: path.resolve(__dirname, "src/saga"),
      // routes: path.resolve(__dirname, 'src/routes'),
      // lib: path.resolve(__dirname, 'src/lib'),
      // mainstyles: path.resolve(__dirname, 'src/styles/mainStyles.css'),
    },
  },
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|ico|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/images",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    port: 8000,
    hot: true,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    open: true,
  },
};
