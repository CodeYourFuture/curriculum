'use strict';

var request = require('request')
  , util = require('util')
  , events = require('events')
  , url = require('url')
  , async = require('async')
  , discover = require('./discover')
  , LightState = require('./lightstate')
  , debug = require('debug')('hugo.bridge')
  ;

module.exports = Bridge;
util.inherits(Bridge, events.EventEmitter);

function Bridge(user, bridgeHost) {
    var bridge = this;

    if (!(this instanceof Bridge)) {
        return new Bridge(user, bridgeHost);
    }

    events.EventEmitter.call(this);

    bridgeHost = bridgeHost || process.env.HUE_HOST;
    this.user  = user || process.env.HUE_USER;
    this.data  = {};
    this.bulbs = {};

    if (! this.user) {
        console.error('please supply username or set HUE_USER in enviroment');
        this.emit('error', 'no username');
        return;
    }
    if (! bridgeHost) {
        debug('discovering');
        discover(function (err, address) {
            if (err) {
                throw new Error(err);
            }
            bridge.bridgeHost = address;
            bridge.init();
        });
    } else {
        this.bridgeHost = bridgeHost;
        this.init();
    }
}

Bridge.prototype.init = function () {
    var bridge = this;
    this.getAll(function (err, res) {
        if (err) {
            throw new Error(err);
        }
        bridge.data = res;
        bridge.bulbs = bridge.registerLightStates(res.lights);
        bridge.emit('ready', bridge);
    });
};

Bridge.prototype.registerLightStates = function (lightData) {
    var bridge = this,
        registry = {};
    Object.keys(lightData).forEach(function (l) {
        registry[l] = new LightState(bridge, l, lightData[l].state);
    });
    return registry;
};

Bridge.prototype.getAll = function (cb) {
    this.get('', function (err, resp, body) {
        if (err) {
            return cb(err);
        }
        if (body[0] && body[0].error) {
            return cb(body[0].error.description);
        }
        cb(null, body);
    });
};

Bridge.prototype.getUrl = function (path) {
    return url.format({
        protocol : 'http',
        host     : this.bridgeHost,
        pathname : '/api/' + this.user + '/' + path
    });
};

['put', 'post'].forEach(function (method) {
    Bridge.prototype[method] = function (path, body, cb) {
        return this.request.apply(
            this,
            [method].concat(Array.prototype.slice.call(arguments))
        );
    };
});

['get', 'delete'].forEach(function (method) {
    Bridge.prototype[method] = function (path, cb) {
        return this.request(method, path, '', cb);
    };
});


Bridge.prototype.request = function (method, path, body, cb) {
    debug(method, this.getUrl(path));
    request[method]({
        url: this.getUrl(path),
        body: body,
        json: true
    }, cb);
};

Bridge.prototype.getBulb = function (nr) {
    return this.bulbs[nr];
};

Bridge.prototype.getBulbs = function (filter) {
    if (! filter) {
        filter = function () { return true; };
    }

    return Object.keys(this.bulbs)
        .map(this.getBulb.bind(this))
        .filter(filter);
};

Bridge.prototype.getBulbsActive = function () {
    return this.getBulbs(function (b) { return b.isOn(); });
};

Bridge.prototype.setAll = function (what, filter, cb) {
    if (! filter) {
        filter = function () { return true; };
    }
    var tasks = [];
    this.getBulbs(filter).forEach(function (b) {
        tasks.push(async.apply(b.set.bind(b), what));
    });
    async.parallel(tasks, cb);
};

Bridge.prototype.setAllActive = function (what, cb) {
    return this.setAll(what, function (b) { return b.isOn(); }, cb);
};

