'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        src: {
            // This will cover all JS files in 'js' and sub-folders
            js: ['app/js/**/*.js'],
            templates: ['app/partials/**/*.html']
        },

        //JS Test files
        test: {
            unit: ['test/unit/**/*.js']
        },

        // Configure Lint\JSHint Task
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: ['Gruntfile.js', '<%= src.js %>', '<%= test.unit %>']
            }
        },

        karma: {
            e2e: {
                configFile: 'test/karma-e2e.conf.js',
                browsers: ['PhantomJS'],
                singleRun: true
            },
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'],
                reporters: ['progress']

            }
        },

        connect: {
            web: {
                options: {
                    port: 9000,
                    bases: '.',
                    keepalive: true
                }
            }
        },

        watch: {
            jshint: {
                files: ["<%= src.js %>", "<%= test.unit %>"],
                tasks: ['jshint']
            }
        },

        concurrent: {
            dev: {
                tasks: ['watch', 'watch-tests', 'web'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('test', ['karma:unit', 'karma:e2e']);
    grunt.registerTask('web', ['connect:web']);
    grunt.registerTask('watch-tests', ['karma:dev']);
    grunt.registerTask('default', ['concurrent:dev']);
};
