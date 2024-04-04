import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  entry: {
    "iccc-fonts": "./src/css/iccc-fonts.css",
    "iccc-global-wrapper": "./src/css/global-wrapped.js",
    "iccc-global": "./src/css/global.js",
    "iccc-utility": "./src/css/iccc-utility.js",
    "iccc-tw-components": "./src/css/tailwind-components.css",
    "iccc-mui-components": "./src/css/iccc-mui-components.scss"
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
