var express = require('express');
var router = express.Router();
var logger= require('../utils/logger.js');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

// var jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: ""
//     }),
//     audience: '',
//     issuer: "",
//     algorithms: ['RS256']
// });
//
// router.use(jwtCheck);


//GET request
router.get('/', function(req, res){
	
	logger.info('GET request');
    res.status(200).json({"response":"success"});

});

module.exports = router;