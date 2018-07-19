const autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var livereload = require('gulp-livereload')
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var runSequence = require('run-sequence');

/**
 *
 */
gulp.task('default', function(done) {
  runSequence('lint', 'sass', 'cssnano', function() {
    done();
  });
});

/**
 * Compile SASS.
 */
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css'));
});

/**
 * Watch SASS.
 */
gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

/**
 * Generic watch.
 */
gulp.task('watch', function () {
  livereload.listen();

  gulp.watch('sass/**/*.scss', ['sass']);

  gulp.watch(['assets/css/styles.css', 'assets/js/*.js', '*.html'], function (files){
      livereload.changed(files)
  });
});

/**
 * Minify CSS.
 */
gulp.task('cssnano', function () {
  return gulp.src('./assets/css/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/css'));
});

/**
 * Lint.
 */

gulp.task('lint', ['lint:sass']);

/* Lint Sass. */
gulp.task('lint:sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sassLint({configFile: 'config/.sass-lint.yml'}))
    .pipe(sassLint.format());
});

/* Lint Sass and throw an error for a CI to catch. */
gulp.task('lint:sass-with-fail', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sassLint({configFile: 'config/.sass-lint.yml'}))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
