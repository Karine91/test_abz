var gulp = require("gulp"),
  browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "public",
      middleware: [require("connect-history-api-fallback")()]
    }
  });
  gulp.watch("./public/index.html").on("change", browserSync.reload);
  gulp.watch("./src/**/*.scss", gulp.series("styles", "cssInject"));
  gulp.watch("./src/**/*.js", gulp.series(scripts, "scriptsRefresh"));
});

gulp.task("scriptsRefresh", function(done) {
  browserSync.reload();
  done();
});

gulp.task("cssInject", function() {
  return gulp.src("./public/dist/styles.css").pipe(browserSync.stream());
});
