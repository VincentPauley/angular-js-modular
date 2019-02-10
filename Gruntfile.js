module.exports = function( grunt ) {

    var config = {
        pkg: grunt.file.readJSON( 'package.json' ),
        jshint: {
            options: {
                reporter: require( 'jshint-stylish' ),
                globals: {
                    angular: true // establish globals that will be used in separate files or else jsHint will throw warnings at them
                }
            },
            build: [ 'Gruntfile.js', 'src/**/*.js' ]
        },
        targethtml: {
            dist: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        uglify: {
            options: {
                // this will show up within top of the file as a marker
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                output: {
                    comments: 'some' // < preserve comments containing a @license or other flags 
                }
            },
            build: {
                files: {
                    'dist/js/script.js': [ 'bower_components/angular/angular.js', 'src/**/*.js' ] 
                }
            }
        },
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/',
                        src: [ '**/*.{png,jpg,svg,ico}' ],
                        dest: 'dist/images'
                    }
                ]
                // {
                //     'dist/images/': 'src/images/*'
                // }
            }
        }
    };

    grunt.initConfig( config );

    // ==================
    // load grunt plugins
    // ==================
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-targethtml' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    
    // ==================
    // create custom tasks
    // ==================
    grunt.registerTask( 'build', 'Building Application', [ 'jshint', 'uglify', 'targethtml', 'copy' ]);
};