module.exports = function(grunt) {
  'use strict';
  var PORT = 80;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      'public/app.js': ['lib/main.js']
    },

    jshint: {
      all: { src: ['lib/**/*.js', 'spec/**/*.js'] },
      options: {
        jshintrc: '.jshintrc'
      }
    },

    mochaTest: {
      test: {
        options: {
          // Ensure tests are reloaded when in same process (i.e. with spawn: false)
          clearRequireCache: true
        },
        src: ['spec/**/*_spec.js']
      }
    },

    watch: {
      options: {
        spawn: false,
        interrupt: true
      },
      all: {
        files: ['lib/**/*.js', 'spec/**/*.js'],
        tasks: ['jshint', 'mochaTest', 'browserify']
      }
    },

    devUpdate: {
      main: {
        options: {
          updateType: "force"
        }
      }
    }
  });

  grunt.registerTask('server', 'Start the web server.', function() {
    grunt.log.writeln('Starting web server...');
    require('./server.js').listen(PORT, function() {
      grunt.log.writeln('Listening on port ' + PORT);
    });
  });

  // just hint and test the changed file only
  grunt.event.on('watch', function (action, path) {
    grunt.config('jshint.all.src', path);

    var spec_path = path.replace(/^lib(.*).js$/, 'spec$1_spec.js');
    grunt.config('mochaTest.test.src', spec_path);
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'mochaTest']);
};
