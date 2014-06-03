'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['public/styles/**/*.scss'],
                tasks: ['sass']
            },
            browserify: {
                files: ['public/scripts/**/*.js', '!public/scripts/bundled.js'],
                tasks: ['jshint', 'browserify']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['public/scripts/bundled.js']
            },
            files: ['public/scripts/**/*.js']
        },
        browserify: {
            dev: {
                files: {
                    './public/scripts/bundled.js': ['./public/scripts/main.js']
                }
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            dev: {
                files: {
                    'public/styles/main.css': 'public/styles/main.scss'
                }
            }
        }
    });

    grunt.registerTask('dev', function () {
        grunt.task.run(['jshint', 'browserify', 'sass', 'watch']);
    });

    grunt.registerTask('default', ['dev']);
};
