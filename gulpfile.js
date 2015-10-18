/*jslint node:true, multistr: true */
'use strict';

var fs              = require('fs');
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync');
var nunjucksRender  = require('gulp-nunjucks-render');
var autoprefixer    = require('gulp-autoprefixer');
var uglify          = require('gulp-uglify');
var jshint          = require('gulp-jshint');
var header          = require('gulp-header');
var rename          = require('gulp-rename');
var minifyCSS       = require('gulp-minify-css');
var pageSubdirs     = require('./gulp-page-subdirs');
var pkg             = require('./package.json');
var cleanDest       = require('gulp-clean-dest');
var concat          = require('gulp-concat');
var sourcemaps      = require('gulp-sourcemaps');
var imagemin        = require('gulp-imagemin');
var pngquant        = require('imagemin-pngquant');
var changed         = require('gulp-changed');

var buildDir = 'build';
var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

function buildHtml() {
  var env     = nunjucksRender.nunjucks.configure(['src/html/templates/']);
  var strings = JSON.parse(fs.readFileSync('./src/strings_da-dk.json', {
    encoding: 'utf8'
  }));

  env.addFilter('strings', function(str) {
    return strings[str];
  });

  // Gets .html and .nunjucks files in pages
  return gulp.src(['src/html/pages/**/*.+(html|nunjucks|tpl)', 'src/*.+(html|nunjucks|tpl)'])
    .pipe(nunjucksRender()); // Renders template with nunjucks
}

gulp.task('css', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package: pkg }))
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('components', ['components-js', 'components-css']);

gulp.task('components-js', function() {
  return gulp.src([
      'src/components/jquery/dist/jquery.js',
      'src/components/PACE/pace.js',
      'src/components/dist/bootstrap/bootstrap.js',
      'src/components/device.js/lib/device.js',
      'src/components/TinyNav.js/tinynav.js',
      'src/components/jquery-smooth-scroll/jquery.smooth-scroll.js',
      'src/components/flexslider/jquery.flexslider.js',
      'src/components/jquery-sticky/jquery.sticky.js',
      'src/components/waypoints/lib/jquery.waypoints.min.js',
      'src/components/jquery-double-tap-to-go/lib/jquery.ui.widget.js',
      'src/components/jquery-double-tap-to-go/src/jquery.dcd.doubletaptogo.js',
      'src/components/vide/jquery.vide.js',
      'src/components/jquery.stellar/jquery.stellar.js',
      'src/components/masonry/dist/masonry.pkgd.js',
      'src/components/jquery.countdown/jquery.plugin.js',
      'src/components/jquery.countdown/jquery.countdown.js',
      'src/components/magnific-popup/dist/jquery.magnific-popup.js',
      'src/components/OwlCarouselBower/owl-carousel/owl.carousel.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('build/assets/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build/assets/js'));
});


gulp.task('components-css', function() {
  return gulp.src([
      "src/components/bootstrap/dist/css/bootstrap.min.css",
      "src/components/flexslider/flexslider.css",
      "css/countdown/jquery.countdown.css",
      "src/components/magnific-popup/magnific-popup.css",
      "src/components/OwlCarouselBower/owl-carousel/owl.carousel.css",
      "src/components/OwlCarouselBower/owl-carousel/owl.theme.css"
    ])

    .pipe(sourcemaps.init())
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/assets/css'));

});

gulp.task('js', function() {
  gulp.src([
      'src/js/scripts.js',
      'src/js/rsvp.js',
      'src/js/main-slider-fade.js',
      'src/js/map-script.js'
    ])

    // .pipe(jshint('.jshintrc'))
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package: pkg }))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { package: pkg }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/assets/js'));

});

gulp.task('imagemin', function() {
  return gulp.src('src/assets/img/**')
    .pipe(changed('build/assets/img'))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('build/assets/img'));
});

gulp.task('assets', ['imagemin'], function() {
  return gulp.src([
      '!src/assets/img/**',
      'src/assets/**'
    ])
    .pipe(gulp.dest('build/assets'));
});

gulp.task('html', function() {
  return buildHtml()
    // .pipe(cleanDest(buildDir))
    .pipe(pageSubdirs())
    .pipe(rename(function(path) {
      if (path.basename !== 'index') {
        path.dirname += '/' + path.basename;
        path.basename = 'index';
      }
      return path;
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: 'build'
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('build', ['assets', 'components', 'css', 'js', 'html']);

gulp.task('build-watch', ['build'], function() {
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/strings*.json', ['html']);
  gulp.watch(['src/**/*.tpl', 'src/**/*.tpl.html'], ['html']);
  gulp.watch('build/*.html');
});

gulp.task('default', ['build', 'browser-sync'], function() {
  gulp.watch('src/scss/**/*.scss', ['css', 'bs-reload']);
  gulp.watch('src/js/*.js', ['js', 'bs-reload']);
  gulp.watch('src/strings*.json', ['html', 'bs-reload']);
  gulp.watch(['src/**/*.tpl', 'src/**/*.tpl.html'], ['html', 'bs-reload']);
  gulp.watch('build/*.html', ['bs-reload']);
});