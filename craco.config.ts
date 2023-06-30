export default {
  // ...
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  style: {
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require("sass"),
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
        additionalData: `
          @import "src/assets/scss/_variables.scss";
          @import "src/assets/scss/_mixins.scss";
        `,
      },
    },
  },
  eslint: {
    mode: "file",
  },
};
