module.exports = function(grunt, options){

    var projectDev = options.projectDev;

    return {
        scripts: {
            files: ["<%= projectDev %>js/*.js"],
            tasks: ["browserify"]
        }
    };
};
