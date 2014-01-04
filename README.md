# gulp-roro

[roro](https://github.com/fmal/roro) plugin for [gulp](https://github.com/wearefractal/gulp).

## Install

```bash
$ npm install gulp-roro --save-dev
```

## Usage

Something like this:

```javascript
var gulp = require('gulp');
var roro = require('gulp-roro')

gulp.task('roro', function () {
    gulp.src('./main.css')
        .pipe(roro({browsers: ['last 2 versions', 'android 4']}))
        .pipe(gulp.dest('./out'));
});
```

The options object is passed directly to [roro](https://github.com/fmal/roro)
