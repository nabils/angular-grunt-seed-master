module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        reporters: ['progress'],

        singleRun: true,

        browsers: ['PhantomJS'],

        colors: true,

        port: 8100,

        runnerPort: 9100,

        files: [
        '../app/lib/angular/angular.js',
        'lib/angular/angular-mocks.js',

        '../app/js/*.js',

        'unit/*Spec.js'
        ]
    });
};
