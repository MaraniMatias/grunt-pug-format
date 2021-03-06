/*
 * grunt-pug-format
 * https://github.com/MaraniMatias
 *
 * Copyright (c) 2017 {Marani Matias Ezequiel
 * Licensed under the MIT.
 */
'use strict';
var pugBeautify = require('pug_formatter');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pug_beautify', 'Accommodating Pug files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
              fill_tab: false,
            omit_div: false,
            tab_size: 2,
            separator_space: true,
            omit_empty_lines: true 
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        //console.log(filepath,options);
        return pugBeautify(grunt.file.read(filepath), options);
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
