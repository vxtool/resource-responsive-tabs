module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
    project: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>css/',
        src: ['*.css'],
        dest: '<%= projectDir %>',
        ext: '.min.css'
      }]
    }
  };
};
