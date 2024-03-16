'use strict';
var join = require('path').join;

module.exports = {
    Bridge : require(join(__dirname, 'lib', 'bridge')),
    discover : require(join(__dirname, 'lib', 'discover'))
};

