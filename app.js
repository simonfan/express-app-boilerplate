
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
	user = require('./routes/user');


// initialization.
var app = express();


// configuration.
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
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
