'use strict';

var _ = require('lodash');
var asyncDone = require('async-done');
var nowAndLater = require('now-and-later');

var getExtensions = require('./getExtensions');
var verifyArguments = require('./verifyArguments');

function buildSeries(){
  var args = verifyArguments(arguments);

  var extensions = getExtensions(_.last(args));

  function series(done){
    nowAndLater.series(args, asyncDone, extensions, done);
  }

  return series;
}

module.exports = buildSeries;