module.exports = function (config) {
    config.set({

        basePath: '../',

        frameworks: ['ng-scenario'],

        reporters: ['progress'],

        singleRun: false,

        browsers: ['Chrome'],

        colors: true,

        proxies: {
            '/': 'http://localhost:8000/'
        },

        urlRoot: '/karma/',

        files: [
            'test/e2e/**/*.js'
        ]
    });
};
