var sass = require("node-sass");

module.exports = function (grunt) {
  // configuration
  grunt.initConfig({
    concat: {
      js: {
        // grunt concat:js
        src: "src/js/*.js",
        dest: "build/script.js",
      },
      css: {
        src: "src/css/*.css",
        dest: "build/style.css",
      },
    },
    uglify: {
      build: {
        files: [
          {
            src: "build/srcipt.js",
            dest: "build/script.min.js",
          },
        ],
      },
    },
    sass: {
      options: {
        implementation: sass,
        sorceMaps: true,
      },
      build: {
        files: [
          {
            src: "src/css/styles.scss",
            dest: "src/css/styles.css",
          },
        ],
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "build",
            src: ["*.css", "!*.min.css"],
            dest: "build",
            ext: ".min.css",
          },
        ],
      },
    },
  });

  // load the plugins(packages)
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-sass");

  // register the tasks
  grunt.registerTask("all", ["concat:js", "concat:css"]);
};
