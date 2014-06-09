'use strict';

var LIVERELOAD_PORT = 35730;
var SERVER_PORT = 5000;

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        paths: {
            src: 'src',
            dist: 'dist'
        },
        watch: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            styles: {
                files: ['<%= paths.src %>/styles/**/*.scss'],
                tasks: ['sass:dev']
            },
            scripts: {
                files: ['<%= paths.src %>/scripts/**/*.js'],
                tasks: ['jshint']
            },
            templates: {
                files: ['<%= paths.src %>/**/*.html']
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                open: true
            },
            dev: {
                options: {
                    livereload: LIVERELOAD_PORT,
                    base: '<%= paths.src %>'
                }
            },
            dist: {
                options: {
                    base: '<%= paths.dist %>',
                    keepalive: true
                }
            }
        },
        clean: {
            dist: '<%= paths.dist %>/*'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: ['public/scripts/**/*.js']
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: '<%= paths.src %>/scripts',
                    name: 'main',
                    mainConfigFile: '<%= paths.src %>/scripts/config.js',
                    findNestedDependencies: true,
                    almond: true,
                    optimize: 'uglify2',
                    out: '<%= paths.dist %>/scripts/main.js',
                    replaceRequireScript: [{
                        files: ['<%= paths.dist %>/index.html'],
                        modulePath: 'scripts/main'
                    }]
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= paths.src %>/styles/main.css': '<%= paths.src %>/styles/main.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= paths.dist %>/styles/main.css': '<%= paths.src %>/styles/main.scss'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    src: '<%= paths.src %>/index.html',
                    dest: '<%= paths.dist %>/index.html'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= paths.src %>',
                    dest: '<%= paths.dist %>',
                    src: [
                        'images/**/*'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('server:dev', [
        'jshint',
        'sass:dev',
        'connect:dev',
        'watch'
    ]);

    grunt.registerTask('server:dist', ['connect:dist']);

    grunt.registerTask('build', [
        'clean:dist',
        'htmlmin:dist',
        'sass:dist',
        'jshint',
        'requirejs:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', ['server:dev']);
};
