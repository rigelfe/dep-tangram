module.exports = function(grunt) {

    grunt.initConfig({
        info: {
            name: 'tangram',
            src: 'src',
            dist: 'dist'
        },
        clean: {
            all: ['<%= info.dist %>']
        },
        uglify: {
            all: {
                src: '<%= info.src %>/<%= info.name %>.js',
                dest: '<%= info.dist %>/<%= info.name %>.js'
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
                    '<%= info.dist %>/<%= info.name %>.js'
                ],

                dest: '<%= info.name %>.zip'
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
