var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
//var sh = require('shelljs');
var babelify = require('babelify');
var babel = require('gulp-babel');

var sourcemaps = require('gulp-sourcemaps');

var browserify = require('browserify');
var source = require('vinyl-buffer');
var buffer = require('vinyl-source-stream');



var paths = {
  styles: ['./src/scss/**/*.scss'],
  scripts: ['./src/scripts/**/*.js']
};

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function(done) {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});


gulp.task('scripts', function () {

  var bundler = browserify(paths.scripts, { debug: true, verbose:true })//.transform(babelify);
    bundler.bundle()
          .on('error', function(err) { console.error(err); this.emit('end'); })

  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/js'));
});


gulp.task('watch', function() {
  gulp.watch(paths.styles, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
});
