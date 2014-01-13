'use strict';

var path = require('path');

var _ = require('lodash');


/**
 * Returns a function that generates 
 */
function from(base) {
	return _.partial(path.join, base);
};


// app
exports.app = from(__dirname);

// app/public
exports.public = from(exports.app('public'));

// app/public/bower_components
exports.bower_components = from(exports.public('bower_components'));

// app/public/templates
exports.templates = from(exports.public('templates'));