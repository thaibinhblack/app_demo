// vue.config.js
const breakpoints = require('./src/breakpoints.json');

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule("scss")
      .oneOf("vue-modules")
      .use("sass-loader")
      .tap(args => {
        args.includePaths = ["./node_modules"]
        return args
      })
  },
  css: {
    extract: true,  
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/variables/colors";
          @use "@/assets/scss/variables/fonts";
          @use "@/assets/scss/functions" as fn;
          @use "@/assets/scss/mixins" as mx;
          $BREAKPOINT-SM: ${breakpoints.SM};
          $BREAKPOINT-MD: ${breakpoints.MD};
          $BREAKPOINT-LG: ${breakpoints.LG};
          $BREAKPOINT-XL: ${breakpoints.XL};
        `
      }
    }
  },
};