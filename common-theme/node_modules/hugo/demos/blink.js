#!/usr/bin/env node
'use strict';

var bridge = require('../index').Bridge();

bridge.on('ready', function () {
    bridge.put('groups/0/action', { alert: 'select' }, function (e, r, b) {
        console.log(e, b);
    });
});
