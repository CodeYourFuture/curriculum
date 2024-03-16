#!/usr/bin/env node
'use strict';

var discover = require('../index').discover;

discover(function (err, address) {
    if (err) {
        throw new Error(err);
    }
    console.log('export HUE_HOST=' + address);
});

