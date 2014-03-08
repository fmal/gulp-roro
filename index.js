'use strict';

var es = require('event-stream'),
    roro = require('roro'),
    _ = require('lodash');

module.exports = function(options) {
    options = _.extend({
        browsers: ['last 2 versions', 'android 4'],
        baseFontsize: 16
    }, options || {});

    function modifyFile(file, cb) {
        try {
            file.contents = new Buffer(roro(file.contents.toString(), options));
        } catch(err) {
            console.warn('error: ' + err.message);
        }

        cb(null, file);
    }

    return es.map(modifyFile);
};
