module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        connect: {
            develop: {
                options: {
                    port: 1881,
                    base: ['public'],
                    keepalive: true,
                    open: true
                }
            },
            production: {
                options: {
                    port: 1882,
                    base: ['public'],
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('develop', ['connect:develop']);
    grunt.registerTask('default', ['develop']);
};
