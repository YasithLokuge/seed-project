var express = require('express');
var router = express.Router();
var logger= require('../utils/logger.js');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var config = require('config');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: config.get('jwt.cache'),
        rateLimit: config.get('jwt.rateLimit'),
        jwksRequestsPerMinute: config.get('jwt.jwksRequestsPerMinute'),
        jwksUri: config.get('jwt.jwksUri')
    }),
    audience: config.get('jwt.audience'),
    issuer: config.get('jwt.issuer'),
    algorithms: config.get('jwt.algorithms')
});

router.use(jwtCheck);


//GET request
router.get('/', function(req, res){
	
	logger.info('GET request');
    res.status(200).json({"response":"success"});

});

module.exports = router;