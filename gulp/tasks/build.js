var gulp = require('gulp'),
del = require('del'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('deleteDistFolder', function() {
    return del('./dist');
});


gulp.task('optimazeImages', function () {
    return gulp.src(['./public/images/**/*', '!./public/images/icons', '!./public/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('compressedStyles', function () {
    return gulp.src('./public/dist/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/dist/'));
});


gulp.task('build', gulp.series('deleteDistFolder', 'styles', 'scripts', 'optimazeImages', 'compressedStyles'));