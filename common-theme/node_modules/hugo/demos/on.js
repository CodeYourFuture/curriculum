#!/usr/bin/env node
'use strict';

require('../index').Bridge().on('ready', function (bridge) {
    bridge.setAll({on: true});
});
