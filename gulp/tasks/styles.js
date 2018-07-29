const gulp = require('gulp'),
    autoprefexer = require('autoprefixer'),
    sass = require('gulp-sass');
    postcss    = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src('./src/styles/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(postcss([autoprefexer]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist'))
});