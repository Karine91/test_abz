const gulp = require('gulp');

gulp.task('default', gulp.series(
    gulp.parallel('styles', 'scripts'),
    'watch'
));