module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      options: {
        mangle: false
      }
    },
    project: {
      files: {
        '<%= projectDir %>/purejs.responsiveTabs.min.js': ['<%= projectDev %>/js/purejs.responsiveTabs.js']
      }
    }
  };
};
