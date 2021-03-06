module.exports = function( grunt ) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	connect: {
		server:{
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				keepalive: true
			}
		}
	},

	karma: {
        unit: {
            configFile: 'test/karma.config.js',
            runnerPort: 9876,
            browsers: [ 'Chrome' ]
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks( 'grunt-karma');
  
  grunt.registerTask( 'default', [ 'connect:server' ] );
  grunt.registerTask( 'test-karma', [ 'karma' ] );
};

