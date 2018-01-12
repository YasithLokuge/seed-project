# seed-ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# seed-core

RESTful application using nodejs, expressjs 
Logger based on Winston
Environment based configuration using config(https://www.npmjs.com/package/config#introduction)

## Install node modules

$ cd &lt;basepath&gt;/seed-core
$ npm install

## Start nodejs server

$ cd &lt;basepath&gt;/seed-core
$ node server.js

## Config

Different config file can be loaded by setting the NODE_ENV environment variable. Default config file is &lt;basepath&gt;\seed-core\config\default.json
e.g. $ export NODE_ENV=dev  
It will load the &lt;basepath&gt;\seed-core\config\dev.json

## Check the log

Default log file is tmp\seed-core.log
To change the log file location modify the &lt;basepath&gt;\seed-core\config\default.json. 