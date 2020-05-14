const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.css').on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('./*.css')
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: ".min",
    extname: ".css"
  }))
  .pipe(gulp.dest('dist'));
});