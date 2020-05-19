const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
  gulp.watch('./src/*.html').on('change', browserSync.reload);
  gulp.watch('./src/*.css').on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('./src/*.css')
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: ".min",
    extname: ".css"
  }))
  .pipe(gulp.dest('dist'));
});