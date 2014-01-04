'use strict';

var expect = require('chai').expect,
    gutil = require('gulp-util'),
    roro = require('../');

var stylePre = ':root{var-purple:#847AD1;}a{color:var(purple);font-size:1rem;}',
    stylePost = 'a {\n  color: #847AD1;\n  font-size: 14px;\n  font-size: 1rem;\n}';

describe('gulp-roro', function() {
    it('should postprocess CSS using roro', function(cb) {
        var stream = roro({baseFontSize: 14});

        stream.on('data', function(data) {
            expect(data.contents.toString()).to.equal(stylePost);
            cb();
        });

        stream.write(new gutil.File({
            contents: stylePre
        }));
    });
});
