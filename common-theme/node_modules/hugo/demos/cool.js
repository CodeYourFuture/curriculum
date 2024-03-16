#!/usr/bin/env node
'use strict';

var bridge = require('../index').Bridge();

bridge.on('ready', function () {
    bridge.setAllActive({xy: [ 0.3124, 0.3226 ], bri: 254});
});

