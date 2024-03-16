#!/usr/bin/env node
'use strict';

var request = require('request'),
    discover = require('../index').discover,
    username = process.argv[2];

function createUser(username, output, cb) {
    var firstAttempt = Date.now(),
        tryRequest = function (addr, timeout, username, cb) {
            var url = 'http://' + addr + '/api';
            request.post({
                url: 'http://' + addr + '/api',
                body: { devicetype: 'Hugo', username: username },
                json: true
            }, function (err, resp, body) {
                if (err) {
                    return cb(err);
                }
                if (resp.statusCode !== 200) {
                    return cb(body);
                }
                if (body && body[0] && body[0].error) {
                    if (
                        (body[0].error.type === 101) &&
                        (Date.now() < firstAttempt + timeout * 1000)
                    ) {
                        output &&  output(body[0].error.description);
                        setTimeout(function () {
                            tryRequest(addr, timeout, username, cb);
                        }, 2500);
                        return;
                    }
                    return cb(body[0].error.description);
                }
                if (body && body[0] && body[0].success) {
                    return cb(null, body[0].success.username);
                }
                return cb(body);
            });
        };

    discover(function (err, addr) {
        if (err) {
            return cb(err);
        }
        tryRequest(addr, 30, username, cb);
    });
}

createUser(username, console.log, function (err, res) {
    if (err) {
        return console.error('Error:', err);
    }
    console.log('HUE_USER=' + res);
});
