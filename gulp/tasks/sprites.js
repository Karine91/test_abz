var gulp = require('gulp'),
spritesmith = require('gulp.spritesmith'),
del = require('del');


gulp.task('beginClean', function () {
    return del(['./public/images/sprites'])
});

gulp.task('createSprite', function (done) {
    var spriteData = gulp.src('./public/images/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            cssTemplate: './gulp/templates/sprite.css.handlebars'
        }));
    spriteData.img.pipe(gulp.dest('public/images/sprites/'));
    spriteData.css.pipe(gulp.dest('src/styles/components/'));
    done();
});

gulp.task('icons', gulp.series('beginClean', 'createSprite'));