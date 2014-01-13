'use strict';

// core:
var path = require('path');

// external:
var hbs = require('hbs');

// internal:
var paths = require('../paths');

module.exports = function configHbs(app) {

	// set engine
	app.set('view engine', 'hbs');

	app.set('views', paths.templates('sections'));
	// loaders are partials that load some specific data
	hbs.registerPartials(paths.templates('loaders'));

	// blocks are html document blocks.
	hbs.registerPartials(paths.templates('blocks'));
};
