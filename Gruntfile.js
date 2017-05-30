'use strict';

module.exports = function (grunt) {
    /**
     * JIT
     */
     require('jit-grunt')(grunt);

    /**
     * Project config
     */
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
         dist: {
            options: {
                outputStyle: 'expanded'
            },
            files: {
               'public/asset/css/style.css': 'src/scss/style.scss'
           }
       }
   },
   watch: {
     sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
            livereload: true,
            spawn: false
        }
    }
}
});

    /**
     * Default task
     * Run `grunt` on the command line
     */
     grunt.task.registerTask('default', ['sass']);
 };