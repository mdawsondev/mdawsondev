var gulp = require('gulp'),
  autoprefixer = require('autoprefixer'),
  compiler = require('google-closure-compiler-js').gulp(),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  postcss = require('gulp-postcss');

gulp.task('autoprefixer', function() {
  return gulp.src('dist/**/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:remove']);

gulp.task('build:clean', function () {
  return del(['dist']);
});

gulp.task('build:copy', ['build:clean'], function(){
  return gulp.src(['src/**/*', '!src/assets/img/', '!src/assets/img/**/*'])
  .pipe(gulp.dest('dist/'));
});

gulp.task('build:images', ['build:copy'], function() {
  return gulp.src(['src/assets/img/**/*', '!src/assets/img/icons', '!src/assets/img/icons/**/*'])
    .pipe(imagemin({
      profressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('build:process', ['build:images'], function() {
  gulp.start('minify-css');
  gulp.start('minify-js-main');
  gulp.start('minify-js-vendor');
});

gulp.task('build:remove', ['build:process'], function() {
  del([
    'dist/assets/styles/!(*.css)',
    'dist/assets/scripts/!([Main.js, Vendor.js])'
  ]);
});

gulp.task('minify-css', ['autoprefixer'], function() {
  return gulp.src('dist/assets/styles/*.css')
  .pipe(cleanCSS({debug: true}, function(details) {
    console.log(details.name + ': ' + details.stats.originalSize);
    console.log(details.name + ': ' + details.stats.minifiedSize);
  }))
  .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('minify-js-main', function() {
  return gulp.src('src/assets/scripts/Main.js', {base: './'})
  .pipe(compiler({
    compilationLevel: 'SIMPLE',
    warningLevel: 'QUIET',
    outputWrapper: '(function(){\n\n}).call(this)',
    jsOutputFile: 'Main.js',
    createSourceMap: true,
  }))
  .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('minify-js-vendor', function() {
  return gulp.src('src/assets/scripts/Vendor.js', {base: './'})
  .pipe(compiler({
    compilationLevel: 'SIMPLE',
    warningLevel: 'QUIET',
    outputWrapper: '(function(){\n\n}).call(this)',
    jsOutputFile: 'Vendor.js',
    createSourceMap: true,
  }))
  .pipe(gulp.dest('dist/assets/scripts'));
});
