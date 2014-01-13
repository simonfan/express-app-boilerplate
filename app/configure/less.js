'use strict';

// core:
var path = require('path');

// external:
var less = require('less-middleware');

// internal:
var paths = require('../paths.js');

module.exports = function configureLessMiddleware (app) {
	/**
	 * LESS (css)
	 * Twitter bootstrap will be installed as a bower_component.
	 * Thus, add the bower_component dir to the dir list at which .less
	 * files should be searched for.
	 * ▼▼▼▼
	 */
	app.use(less({
		paths: [paths.bower_components('bootstrap/less')],
		src: paths.public('css'),
		prefix: '/css',

		debug: true,
	}));
};