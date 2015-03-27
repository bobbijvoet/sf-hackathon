var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var $ = require('gulp-load-plugins')();
var connect = require('gulp-connect');

gulp.task('default', function () {
    gulp.start('js', 'css', 'watch');
});

gulp.task('watch', function () {

    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/scripts/**/*.js', ['js']);

    gulp.src('www/index.html')
        .pipe($.watch('www/index.html'));
});

gulp.task('js', function () {
    es6ToEs5('./src/scripts/app.js', 'bundle.js');
});

gulp.task('css', function () {
    'use strict';
    var cssFilter = $.filter(['*.css']);
    var processors = [
            require('postcss-assets')({
            loadPath: './app/img'
        }),
            require('autoprefixer-core')({
            browsers: ['last 2 versions', 'IE 10']
        }),
            require('css-mqpacker')
            // require('csswring')
        ];

    return gulp.src('./src/scss/**/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            errLogToConsole: true,
            includePaths: ['bower_components']
        }))
        .pipe($.postcss(processors))
        .pipe($.sourcemaps.write('.'))
        .pipe(cssFilter)
        .pipe(cssFilter.restore())
        .pipe($.size({
            showFiles: true
        }))
        .pipe(gulp.dest('www/css'));
});

function es6ToEs5(fileName, outputName) {
    "use strict";

    browserify(fileName, {
        debug: true
    })
        .transform(to5ify)
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(outputName))
        .pipe(buffer())
        .pipe($.sourcemaps.init({
            loadMaps: true
        })) // loads map from browserify file
        //.pipe($.uglify())
        .pipe($.sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./www/build'))
}
