# seed-core

RESTful application using nodejs, expressjs
Logger based on Winston
Environment based configuration using config(https://www.npmjs.com/package/config#introduction)

## Install node modules

`cd &lt;basepath&gt;/seed-core`
`npm install`

## Start nodejs server

`cd &lt;basepath&gt;/seed-core`
`node server.js`

## Config

Different config file can be loaded by setting the NODE_ENV environment variable. Default config file is `&lt;basepath&gt;\seed-core\config\default.json`
e.g. `export NODE_ENV=dev`
It will load the `&lt;basepath&gt;\seed-core\config\dev.json`

## Check the log

Default log file is `tmp\seed-core.log`
To change the log file location modify the `&lt;basepath&gt;\seed-core\config\default.json`