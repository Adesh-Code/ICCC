import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  entry: {
    "dhig-fonts": "./src/css/dhig-fonts.css",
    "dhig-global-wrapper": "./src/css/global-wrapped.js",
    "dhig-global": "./src/css/global.js",
    "dhig-utility": "./src/css/dhig-utility.js",
    "dhig-tw-components": "./src/css/tailwind-components.css",
    "dhig-mui-components": "./src/css/dhig-mui-components.scss"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  output: {
    clean: true,
    path: path.resolve("./lib/build/css")
  },
  plugins: [new MiniCssExtractPlugin({ filename: `[name].css` })]
};

export default config;
