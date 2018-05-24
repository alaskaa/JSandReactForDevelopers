module.exports = function(grunt) {

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js', '*.css'],
      task: ['updated']
    },
    uglify: {
      build: {
        src: ['index.js', 'logger.js'],
        // have to add index and logger files into source index structure
        dest: 'dist/bundle.js'
      }
    }
  });
// wow
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('updated', () => {
    grunt.log.writeln(`It updated again!`);
  });

  grunt.registerTask('default', (name) => {
    grunt.log.writeln(`Hello, ${grunt.config.get('name')}!`);
  });
};
// this is a default task
// ${} is a template literal
