var logger = require('./modules/utils/logger.js');
var express = require('express');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());

/*Express Router
GET Request
Post Request
*/
var authResources = require('./modules/routes/AuthResources.js');
app.use('/api/v1', authResources);

logger.info('Starting the server');

var server = app.listen(3000, function(){
	logger.info('Server started...');
}) ;