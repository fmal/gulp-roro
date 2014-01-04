'use strict';

var es = require('event-stream'),
    roro = require('roro');

module.exports = function(options) {
    options = options || {};

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
