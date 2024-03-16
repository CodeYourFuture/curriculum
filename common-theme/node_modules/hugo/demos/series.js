#!/usr/bin/env node
'use strict';

var bridge = require('../index').Bridge()
  , async = require('async')
  ;


function wait(howLong, cb) {
    setTimeout(cb, howLong);
}

bridge.on('ready', function () {
    var tasks = [],
        bulbs = bridge.getBulbs();

    process.argv.slice(2).forEach(function (col) {
        var subtasks = [];

        bulbs.forEach(function (b) {
            subtasks.push(async.apply(b.setColor.bind(b), col, 2));
        });

        tasks.push(async.apply(async.parallel, subtasks));
        tasks.push(async.apply(wait, 1000));
    });
    tasks.pop();

    async.series(
        tasks,
        function (err, res) {
            if (err) {
                throw new Error(err);
            }
        }
    );
});

