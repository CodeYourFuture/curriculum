#!/usr/bin/env node
'use strict';

var repl = require('repl')
  , bridge = require('../index').Bridge()
  ;

bridge.on('ready', function () {
    repl.start({prompt : 'hue bridge> '}).context.bridge = bridge;
});


