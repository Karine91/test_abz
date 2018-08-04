var gulp = require("gulp"),
  del = require("del"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify"),
  imagemin = require("gulp-imagemin"),
  webpack = require("webpack");

gulp.task("deleteDistFolder", function() {
  return del("./public/dist");
});

gulp.task("optimazeImages", function() {
  return gulp
    .src([
      "./public/images/**/*",
      "!./public/images/icons",
      "!./public/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./public/images"));
});

gulp.task("compressedStyles", function() {
  return gulp
    .src("./public/dist/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest("./public/dist/"));
});

gulp.task("prodScripts", function(done) {
  webpack(require("../../webpack.config.js")("production"), function(
    err,
    stats
  ) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    done();
  });
});

gulp.task("compressedScripts", function(done) {
  return gulp
    .src("./public/dist/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./public/dist/"));
});

gulp.task(
  "build",
  gulp.series(
    "deleteDistFolder",
    "styles",
    "optimazeImages",
    "compressedStyles",
    "prodScripts",
    "compressedScripts"
  )
);
