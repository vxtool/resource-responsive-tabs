module.exports = function(grunt, options){

  var projectDev = options.projectDev;

  return {
    options: {
        jshintrc: 'src/tasks/config/.jshintrc'
    },
    project: ['<%= projectDev %>js/{,*/,**/}*.js']
  };
};
