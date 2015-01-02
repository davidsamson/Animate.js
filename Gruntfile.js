module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [  'source/animate.js',
                        'source/vector2.js',
                        'source/sequence.js',
                        'source/transformsequence.js',
                        'source/scalesequence.js',
                        'source/projectilesequence.js',
                        'source/rotate3dsequence.js',
                        'source/animation.js'
                     ],
                dest: 'build/animate.min.js',
                mangle: true,
                compress: true
            }
        },
        exec: {
            build: {
                cmd: function () {
                    return "";
                },
                stdout: false,
                stderr: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks("grunt-exec");

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};