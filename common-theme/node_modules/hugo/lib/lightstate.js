/*jshint expr:true */
'use strict';

var color = require('./color')
  , async = require('async')
  , _     = require('lodash')
  , debug = require('debug')('hugo.lightstate')
  ;

module.exports = LightState;


function LightState(bridge, nr, state) {
    this.bridge = bridge;
    this.nr = nr;
    this.setState(state);
}

LightState.read = function (bridge, light, cb) {
    var instance = new LightState(bridge, light, {});
    instance.reload(cb);
};

LightState.prototype.reload = function (cb) {
    var lightstate = this;
    this.bridge.get('lights/' + this.nr, function (err, resp, body) {
        if (err) {
            cb && cb(err);
            return;
        }
        lightstate.setState(body.state);
        cb && cb(null, body.state);
    });
};

LightState.prototype.setState = function (state, val) {
    if ('object' === typeof(state)) {
        this.state = state;
        return;
    }
    this.state[state] = val;
};

LightState.prototype.mergeValues = function (newValues) {
    var state = _.clone(newValues),
        lightstate = this;
    delete state.transitiontime;
    if (state.xy && this.state.colormode !== 'xy') {
        state.colormode = 'xy';
    }
    if (state.hasOwnProperty('ct') && this.colormode !== 'ct') {
        state.colormode = 'ct';
    }
    if (
        (this.colormode !== 'hs') &&
        (
            state.hasOwnProperty('hue') || state.hasOwnProperty('sat')
        )
    ) {
        // firmware bug! Actually, setting sat without hue while coming
        // from colormode ct sets hs mode, but does not set the bulb to the
        // old hue.
        state.colormode = 'hs';
    }

    Object.keys(state).forEach(function (k) {
        lightstate.setState(k, state[k]);
    });
};


LightState.prototype.set = function (keyVal, cb) {
    var newValues = this.getChanges(keyVal);

    if (! newValues) {
        debug('ignoring redundant values for bulb %d:', this.nr, keyVal);
        if (cb) {
            cb(null, this.state);
        }
        return;
    }
    debug('sending to bridge', newValues);
    this.bridge.put(
        'lights/' + this.nr + '/state',
        newValues,
        this.getResponseParser(cb)
    );
};

LightState.prototype.getChanges = function (newValues) {
    var keyVal = _.clone(newValues)
      , transitiontime = keyVal.transitiontime
      ;

    // transitiontime isn't recorded in state. Delete before weeding.
    delete keyVal.transitiontime;

    // if not specified, assume to switch on:
    if (! keyVal.hasOwnProperty('on') && (this.state.on === false)) {
        keyVal.on = true;
    }

    // weed unused parameters based on old and new color mode:
    keyVal = color.removeUnusedParams(keyVal, this.state);

    if (_.isEmpty(keyVal)) {
        return null;
    }
    // add any transition back in:
    if ('undefined' !== typeof(transitiontime)) {
        keyVal.transitiontime = transitiontime;
    }
    return keyVal;
};

LightState.prototype.getResponseParser = function (cb) {
    var lightstate = this;
    return function (err, resp, body) {
        var newValues = {};
        if (err) {
            if (cb) {
                return cb(err);
            }
            throw new Error(err);
        }
        if (200 !== resp.statusCode) {
            return cb(body);
        }
        body.forEach(function (row) {
            var errMsg;
            if (row.error) {
                errMsg = row.error.address + ': ' + row.error.description;
                console.error(errMsg);
                return;
            }
            Object.keys(row.success).forEach(function (r) {
                var matches;
                matches = r.match(/\/lights\/(\d+)\/state\/(\S+)/);
                newValues[matches[2]] = row.success[r];
            });
        });
        lightstate.mergeValues(newValues);
        cb && cb(null, lightstate.state);
    };
};


LightState.prototype.setColor = function (col, transition, cb) {
    var colorState = color.ToState(col);

    _.extend(colorState, {
        transitiontime : ('undefined' !== typeof(transition)) ? transition : 1,
        on: true
    });

    this.set(colorState, cb);
};

LightState.prototype.flash = function (col, cb) {
    var oldVals = this.getColorValues();

    oldVals.transitiontime = 1;

    async.series([
        async.apply(this.setColor.bind(this), col, 0),
        async.apply(this.set.bind(this), oldVals)
    ], cb);
};

LightState.prototype.getColorValues = function () {
    return color.fromState(this.state);
};

LightState.prototype.isOn = function () {
    return (this.state.on === true);
};
