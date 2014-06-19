module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
			dist: {
		        src: [
		        	'js/libs/jquery-1.11.1.js', // load jQuery first
		            'js/libs/bootstrap.js',		// All JS in the libs folder
		            'js/main.js'		// primary JS file 
		        ],
		        dest: 'js/.tmp/main.cat.js',
    		}
		},

		uglify: {
		    build: {
		        src: 'js/.tmp/main.cat.js',
		        dest: 'js/build/main.min.js'
		    }
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/build/main.css': 'css/main.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8080,
					base: './'
				}
			}
		},

		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				}
			},

			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			},

			html: {
				files: ['index.html', '*.html', 'css/build/*.css'],
				options: {
					livereload: true,
				}
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	//grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('default', ['connect', 'watch']);
};