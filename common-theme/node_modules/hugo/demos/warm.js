#!/usr/bin/env node
'use strict';

var bridge = require('../index').Bridge();

bridge.on('ready', function () {
    bridge.setAllActive({xy: [ 0.5261, 0.4132 ], bri: 254});
});

