const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const absolutePath = path.join(__dirname);
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const bundleAnalyzerPluginConfiguration =
  process.env.NODE_ENV === "production"
    ? [
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          defaultSizes: "gzip",
          reportFilename: `../build/static/report.html`,
          // for the purposes of bundle size analysis, we are excluding:
          // refractor bundle, which is used by ref-app for syntax highlighting
          // react bundle, because it is assumed to be supplied by all page hosts
          excludeAssets: ["vendors--refractor", "vendors--react"]
        })
      ]
    : [];

module.exports = {
  webpack: {
    alias: {},
    plugins: [...bundleAnalyzerPluginConfiguration],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePath];
      }
      webpackConfig.output = {
        ...webpackConfig.output,
        chunkFilename: "static/js/[name].js"
      };
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          automaticNameDelimiter: "--",
          chunks: "all",
          minSize: 0,
          maxInitialRequests: Infinity,
          cacheGroups: {
            refractorVendor: {
              name: "vendors--refractor",
              test: /[\\/]node_modules[\\/](refractor|react-syntax-highlighter)[\\/]/
            },
            reactVendor: {
              name: "vendors--react",
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|history)[\\/]/
            },
            emotionVendor: {
              name: "vendors--emotion",
              test: /[\\/]node_modules[\\/](@emotion)[\\/]/
            },
            muiVendor: {
              name: "vendors--mui",
              test: /[\\/]node_modules[\\/](@mui)[\\/]/
            }
          }
        }
      };
      return webpackConfig;
    }
  }
};
