'use strict';

var color = require('color')
  , debug = require('debug')('hugo.color')
  , _     = require('lodash')
  ;

function removeUnusedParams(requestedState, oldState) {
    var newState = _.clone(requestedState),
        // order is important. xy > ct > hs.
        modeOverrides = [
            { mode: 'xy', params: ['xy'], obsolete : ['hue', 'sat', 'ct']},
            { mode: 'ct', params: ['ct'], obsolete : ['hue', 'sat']},
            { mode: 'hs', params: ['hue', 'sat'], obsolete : [], force: ['hue']}
        ],
        nonColorParams = _.omit(
            newState, _.flatten(modeOverrides.map(function (m) {
                return m.params;
            }))
        );

    modeOverrides.forEach(function (m) {
        if (_.intersection(Object.keys(newState), m.params).length) {
            m.obsolete.forEach(function (param) {
                delete newState[param];
            });
            if (oldState.colormode === m.mode) {
                m.params.forEach(function (p) {
                    if (_.isEqual(oldState[p], newState[p])) {
                        delete newState[p];
                    }
                });
            }
            // kludge for firmware bug:
            // for hs to always work, hue has to be present in new request
            if (m.force) {
                m.force.forEach(function (p) {
                    if (! _.has(newState, p)) {
                        newState[p] = oldState[p];
                    }
                });
            }
        }
    });

    Object.keys(nonColorParams).forEach(function (k) {
        if (_.isEqual(oldState[k], newState[k])) {
            delete newState[k];
        }
    });
    debug(
        'removed unused parameters',
        _.difference(Object.keys(requestedState), Object.keys(newState))
    );

    return newState;
}

module.exports = {

    ToState : function (colspec) {
        var hsv = color(colspec).hsvArray();
        debug('resolved "%s" to hsv:', colspec, hsv);
        return {
            hue : Math.round(hsv[0] * (65535 / 360)),
            sat : Math.round(hsv[1] * 2.54),
            bri : Math.round(hsv[2] * 2.54)
        };
    },

    fromState : function (state) {
        var copyKeys = ['on', 'bri'];

        if ('hs' === state.colormode) {
            copyKeys.push('hue', 'sat');
        } else {
            copyKeys.push(state.colormode);
        }
        return _.pick(state, copyKeys);
    },

    removeUnusedParams : removeUnusedParams
};
