var webpackConfig = require('./webpack.config.test');

webpackConfig.module.postLoaders = [{
  test: /\.js$/, exclude: /(node_modules|tests)/,
  loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
  config.set({
    frameworks: [ 'mocha', 'chai' ],
    files: [
      // './node_modules/css-modules-require-hook/preset.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './tests/test-bundler.js'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      './tests/test-bundler.js': [ 'webpack' ]
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true,
        stats: 'errors-only',
    },
  });
};
