module.exports = function (config) {
    config.set({
        frameworks: ['ng-scenario'],

        reporters: ['progress'],

        singleRun: false,

        browsers: ['Chrome'],

        colors: true,

        port: 8100,

        runnerPort: 9100,

        files: [
            '../app/lib/angular/angular.js',
            'lib/angular/angular-mocks.js',

            '../app/js/*.js',

            'e2e/scenarios.js'
        ]
    });
};
