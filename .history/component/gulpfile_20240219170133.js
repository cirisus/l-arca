var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
    return gulp.src('/var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
    return gulp.src(['components/root.css', 'components/**/*.css'])
        .pipe(concat('normalize.css'))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS())
        .pipe(concat('normalize.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('css'));component/*.css')
        .pipe(concat('normalize.css'))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS())
        .pipe(concat('normalize.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('css'));