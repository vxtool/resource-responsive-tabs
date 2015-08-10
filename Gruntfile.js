module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'src/tasks'),
        data: {
            projectDir  : 'dist/',
            projectDev  : 'src/',
            pkg: grunt.file.readJSON('package.json')
        }
    });

};
