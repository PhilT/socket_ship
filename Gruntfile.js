module.exports = function(grunt) {
  var PORT = 80;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      'public/app.js': ['app/client/main.js']
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'spec/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'progress',

          // Ensure tests are reloaded when in same process (i.e. with spawn: false)
          clearRequireCache: true
        },
        src: ['spec/server/**/*.js']
      }
    },

    watch: {
      options: {
        spawn: false,
        interrupt: true
      },
      hint: {
        files: ['app/**/*.js', 'spec/**/*.js'],
        tasks: ['jshint']
      },
      browserify: {
        files: ['app/client/**/*.js'],
        tasks: ['browserify']
      },
      mocha: {
        files: ['app/server/**/*.js', 'spec/server/**/*.js'],
        tasks: ['mochaTest']
      }
    }
  });

  grunt.registerTask('server', 'Start the web server.', function() {
    grunt.log.writeln('Starting web server...');
    require('./app/server/server.js').listen(PORT, function() {
      grunt.log.writeln('Listening on port ' + PORT);
    });
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
};
