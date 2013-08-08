module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src',
            dist: 'dist'
        },
        clean: {
            all: ['<%= dirs.dist %>']
        },
        uglify: {
            all: {
                src: '<%= dirs.src %>/<%= pkg.name %>.js',
                dest: '<%= dirs.dist %>/<%= pkg.name %>.js'
            }
        },
        zip: {
            main: {
                router: function (filepath) {
                    return 'tangram/' + filepath;
                },

                src: [
                    'package.json', 
                    'README.md', 
                    '<%= dirs.dist %>/<%= pkg.name %>.js'
                ],

                dest: '<%= pkg.name %>.zip'
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify']);
    grunt.registerTask('release', ['default', 'zip']);
};
