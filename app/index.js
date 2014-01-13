
/**
 * Module dependencies.
 */
// native:
var path = require('path'),
	http = require('http');

// third-party:
var express = require('express'),
	less = require('less-middleware');

// submodules:
var routes = require('./routes'),
	user = require('./routes/user'),
	paths = require('./paths');


// initialization.
var app = express();


// configuration.
app.configure(function appConfig() {

	app.set('port', process.env.PORT || 3000);

	// HBS (handlebars templating)
	// ▼▼▼
	require('./configure/hbs')(app);

	// LESS (css)
	// ▼▼▼▼
	require('./configure/less')(app);

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);

	/**
	 * STATIC FILES
	 * ▼▼▼▼▼▼ ▼▼▼▼▼
	 */
	app.use( express.static(path.join(__dirname, 'public')) );
	app.use( express.static(path.join(__dirname, 'public_built')) );
	/**
	 * ▲▲▲▲▲▲ ▲▲▲▲▲
	 * STATIC FILES
	 */
});

// specialized configs.
app.configure('development', function(){
	app.use(express.errorHandler());
});


// routing
app.get('/', routes.index);
app.get('/users', user.list);



// start app.
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
