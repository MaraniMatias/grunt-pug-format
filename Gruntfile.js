/*
 * grunt-pug-format
 * https://github.com/MaraniMatias
 *
 * Copyright (c) 2017 {Marani Matias Ezequiel
 * Licensed under the MIT.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    pug_beautify: {
      'test_false_true_2_sapace_true': {
        expand: true,
        cwd: 'test/before/',
        src: '*.jade',
        dest: 'tmp/false_true_2_sapace_true',
        options: { 
            fill_tab: false,
            omit_div: true,
            tab_size: 2,
            separator_space: true,
            omit_empty_lines: true 
        }
      },
      'test_false_true_2_comma_true': {
        expand: true,
        cwd: 'test/before/',
        src: '*.jade',
        dest: 'tmp/false_true_2_comma_true',
        options: { 
            fill_tab: false,
            omit_div: true,
            tab_size: 2,
            separator_space: false,
            omit_empty_lines: true 
        }
      }
    },
    
    // Unit tests mocha.
    mochaTest: {
      unit: {
        options: {
           reporter: 'spec' // spec progress
        },
        src: ['./test/*_mocha.js']
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'pug_beautify']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
