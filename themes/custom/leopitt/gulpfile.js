var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var sassLint = require('gulp-sass-lint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

const autoprefixer = require('gulp-autoprefixer');

/**
 * Default task.
 */
gulp.task('default', function(done) {
  runSequence('lint', 'sass', 'cssnano', function() {
    done();
  });
});

/**
 * Sass.
 */

/* Default sass task. */
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css'));
});

/* Watch. */
gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
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
