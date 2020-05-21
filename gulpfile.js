const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

const watchDirHtml = './app/*.html';
const watchDirSass = './src/sass/**.scs';
const watchDirJs = './src/js/*.js';
const cssOutput = './app/css/';

const browserSyncRun = () => {
  serverSass();
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
  watch(watchDirHtml).on('change', browserSync.reload);
  watch(watchDirSass).on('change', serverSass);
  watch(watchDirJs).on('change', browserSync.reload);
};

const serverSass = () => {
  return src(watchDirSass)
    .pipe(sass())
    .pipe(dest(cssOutput))
    .pipe(browserSync.stream());
}

exports.server = browserSyncRun;