const { dest } = require('gulp');
const gif = require('gulp-if');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const pkg = require('../../package.json');

module.exports = function () {
    const debug = process.env.NODE_ENV === 'development';
    return browserify({
            entries: ['index.js'],
            debug
        }).
        add('index.js').
        bundle().
        pipe(source(pkg.name + '.js')).
        pipe(buffer()).
        pipe(sourceMaps.init({ loadMaps: true })).
            pipe(gif(!debug, uglify())).
        pipe(sourceMaps.write('.')).
        pipe(dest('public'));
};
