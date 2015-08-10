module.exports = function(grunt, options){

    var projectDev = options.projectDev;
    var projectDir = options.projectDir;

    return {
        dist: {
            options: {
                transform: [
                    ["babelify", {
                        loose: "all"
                    }]
                ]
            },
            files: {
                "<%= projectDir %>app.js": ["<%= projectDev %>js/app.js"]
            }
        }
    };
};
