var config = require('./config');

module.exports = {
	options: {
		nospawn: true,
		livereload: config.reloadPort
	},
	server: {
		files: [
			'app/**/*.js'
		],
		tasks: ['develop', 'delayed-livereload']
	},
	js: {
		files: ['public/js/*.js'],
		options: {
			livereload: config.reloadPort
		}
	},
	css: {
		files: ['public/css/*.css'],
		options: {
			livereload: config.reloadPort
		}
	},
	jade: {
		files: ['views/*.jade'],
		options: {
			livereload: config.reloadPort
		}
	}
};