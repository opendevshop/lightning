// Karma configuration
// Generated on Wed Dec 09 2015 11:43:20 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      // Newer versions of Node install dependencies into node_modules, but older versions
      // install dependencies into node_modules/DEPENDENT_PACKAGE/node_modules. So we need
      // to account for both possibilities here, since Travis CI uses older versions of
      // Node.
      'node_modules/underscore/underscore.js',
      'node_modules/backbone/node_modules/underscore/underscore.js',
      'node_modules/backbone/backbone.js',
      'node_modules/dropzone/dist/dropzone.js',
      'node_modules/es6-promise/dist/es6-promise.js',
      'node_modules/sinon/pkg/sinon.js',
      'Drupal.js',
      '../../js/Backend.js',
      '../../js/EntityGrid.js',
      '../../js/MediaLibrary.js',
      '../../js/Uploader.js',
      '*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
