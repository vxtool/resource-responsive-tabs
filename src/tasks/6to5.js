module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      modules: 'common'
    },

    build: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>js/',
        src: ['**/*.js'],
        dest: '<%= projectDir %>',
      }]
    }
  };
};
