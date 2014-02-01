module.exports = function(grunt) {
  
  grunt.initConfig({

    wintersmith: {
      build: {},
      preview: {
        options: {
          action: "preview"
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8']
      },
      files: {
        src: 'contents/stylesheets/*.css'
      }
    },
    watch: {
      all: {
        options: { livereload: true },
        files: ['templates/**/*', 'contents/**/*'],
        
      },
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      }
    },
    sass: {
      dist: {
        files: {
          'contents/stylesheets/site.css': 'sass/site.sass'
        }
      }
    },
    concurrent: {
        target: {
            tasks: ['wintersmith:preview', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    'gh-pages': {
      options: {
        base: 'build',
        repo: 'git@github.com:donovanh/test.git'
      },
    src: ['**/*']
  }

  });

  // Load them tasks
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Some custom tasks
  grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('deploy', ['sass:dist', 'autoprefixer', 'wintersmith:build', 'gh-pages']);

};