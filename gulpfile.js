var gulp                = require('gulp'),

  bump                  = require('gulp-bump'),
  changed               = require('gulp-changed'),
  concat                = require('gulp-concat'),
  config                = require('./build.config.js'),
  conventionalChangelog = require('conventional-changelog'),
  debug                 = require('gulp-debug'),
  del                   = require('del'),
  ecstatic              = require('ecstatic'),
  fs                    = require('fs'),
  gutil                 = require('gulp-util'),
  header                = require('gulp-header'),
  html2js               = require('gulp-html2js'),
  http                  = require('http'),
  inject                = require("gulp-inject"),
  jshint                = require('gulp-jshint'),
  less                  = require('gulp-less'),
  livereload            = require('gulp-livereload'),
  merge                 = require('merge-stream'),
  ngAnnotate            = require('gulp-ng-annotate'),
  pkg                   = require('./package.json'),
  rename                = require('gulp-rename'),
  sass                  = require('gulp-ruby-sass'),
  series                = require('stream-series');
  streamqueue           = require('streamqueue'),
  stylish               = require('jshint-stylish'),
  svgstore              = require('gulp-svgstore'),
  uglify                = require('gulp-uglify'),
  watch                 = require('gulp-watch')
;

gulp.task('sass', function () {
	return gulp.src(config.app_files.scss)
		.pipe(sass({noCache: true}))
		.on('error', function (err) { console.log(err.message); })
		.pipe(rename(function(path){
			path.basename = pkg.name + '-' + pkg.version;
		}))
		.pipe(gulp.dest(config.build_dir + '/assets'));
});

gulp.task('copy', function() {
	var sources = [
		gulp.src('src/assets/**/*', { base: 'src/assets/' })
			.pipe(changed(config.build_dir + '/assets'))
			.pipe(gulp.dest(config.build_dir + '/assets')),

		gulp.src(config.app_files.jsmodules)
      .pipe(changed(config.build_dir + '/src'))
      .pipe(gulp.dest(config.build_dir + '/src')),

    gulp.src(config.app_files.js)
			.pipe(changed(config.build_dir + '/src'))
			.pipe(gulp.dest(config.build_dir + '/src')),

		gulp.src(config.vendor_files.js.concat(config.vendor_files.css), {base: '.'})
			.pipe(changed(config.build_dir))
			.pipe(gulp.dest(config.build_dir))
	];

	return merge(sources);
});


gulp.task('injectify', ['prod'], function () {

	var target = gulp.src('./build/index.html'),
		  files = [].concat(
  			config.vendor_files.css,
  			'assets/' + pkg.name + '-' + pkg.version + '.app.css',
  			'js/app.js',
  			'templates-app.js'
  		),
  		sources = gulp.src(files, {read: false, cwd: config.prod_dir});

	return target.pipe(inject(sources))
		.pipe(gulp.dest(config.prod_dir));
});


gulp.task('prod', function() {

	var paths = {
		scriptsNoTest: ['src/**/*.js', '!src/**/*.spec.js'],
		assets : 'build/assets/**/*',
		index: 'build/index.html',
		templates: 'build/templates-app.js'
	};

	//Concat into prod/js/app.js
	var concats = streamqueue(
		{objectMode: true},
		gulp.src(config.vendor_files.js),
		gulp.src(paths.scriptsNoTest)
	)
		.pipe(concat('app.js'))
		.pipe(ngAnnotate({
			remove: false,
			add: false,
			single_quotes: true
		}))
		.pipe(gulp.dest(config.prod_dir + '/js'));

	//Copy assets
	var simpleCopy = (function(){
		var sources = [
			gulp.src(paths.assets)
				.pipe(gulp.dest(config.prod_dir + '/assets')),
			gulp.src(paths.templates)
				.pipe(gulp.dest(config.prod_dir))
		];
		return merge(sources);
	})();

	return {
		concats : concats,
		simpleCopy: simpleCopy
	};
});

gulp.task('less', function() {
	return gulp.src(config.app_files.less)
		.pipe(changed(config.build_dir + '/assets', {extension: '.css'}))
		.pipe(less())
		.pipe(rename(function(path){
			path.basename = pkg.name + '-' + pkg.version;
		}))
		.pipe(gulp.dest(config.build_dir + '/assets'));
});

gulp.task('jshint', function() {
	var options = {
		curly: true,
		immed: true,
		newcap: true,
		noarg: true,
		sub: true,
		boss: true,
		eqnull: true,
		globalstrict: true
	};

	return gulp.src([ config.app_files.js, config.app_files.jsmodules ] )
		.pipe(jshint(options))
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});

gulp.task('html2js', function() {
	var templates = [
		{ files: config.app_files.atpl, type: 'app'},
		{ files: config.app_files.ctpl, type: 'common'}
	];

	return templates.map(function(template) {
		return gulp.src(template.files)
			.pipe(html2js({base: 'src/' + template.type, outputModuleName: 'templates-' + template.type}))
			.pipe(changed(config.build_dir, {extension: '.js'}))
			.pipe(concat('templates-'+ template.type +'.js'))
			.pipe(gulp.dest(config.build_dir));
	});
});

var indexTask = function() {
	var target = gulp.src('src/index.html'),
  		vendor_files = [].concat(
        config.vendor_files.js,
        config.vendor_files.css
      ),
      app_files  = [].concat(
  			config.app_files.js,
  			'templates-common.js',
  			'templates-app.js',
  			'assets/' + pkg.name + '-' + pkg.version + '.css'
  		),
  		vendorStream  = gulp.src(vendor_files, {read: false, cwd: config.build_dir, addRootSlash: false}),
      modulesStream = gulp.src(config.app_files.jsmodules, {read: false, cwd: config.build_dir, addRootSlash: false}),
      appStream     = gulp.src(app_files, {read: false, cwd: config.build_dir, addRootSlash: false});

	return target
    .pipe(inject(series(vendorStream, modulesStream, appStream)))
		.pipe(gulp.dest(config.build_dir));
};

gulp.task('index', ['sass', 'copy', 'html2js'], function() {
	return indexTask();
});

gulp.task('watch-index', ['sass'], function() {
	return indexTask();
});

var svgstoreTask = function() {
	var svgs = gulp.src('src/assets/svg/*.svg')
			.pipe(svgstore({ prefix: pkg.name + '-', inlineSvg: true })),

		fileContents = function fileContents (filePath, file) {
			return file.contents.toString('utf8');
		};

	return gulp.src(config.build_dir + '/index.html')
		.pipe(inject(svgs, { transform: fileContents }))
		.pipe(gulp.dest(config.build_dir));
};

gulp.task('svgstore', ['index'], function () {
	return svgstoreTask();
});

gulp.task('watch-svgstore', ['watch-index'], function () {
	return svgstoreTask();
});

gulp.task('livereload', ['svgstore'], function() {
	livereload.listen();
	gulp.watch(config.build_dir + '/**').on('change', livereload.changed);
});

gulp.task('watch', ['svgstore'], function() {
	gulp.watch(['**/*.scss'], ['sass']);
	gulp.watch(['src/**/*.js'], [
		//'jshint',
		'copy'
	]);
	gulp.watch([config.app_files.atpl, config.app_files.ctpl], ['html2js']);
	gulp.watch('src/index.html', ['watch-index', 'watch-svgstore']);
	gulp.watch('src/assets/svg/*.svg', ['svgstore']);
});

gulp.task('server', function() {
	http.createServer(ecstatic({root: __dirname + '/build'})).listen(8080);
	gutil.log(gutil.colors.blue('HTTP server listening on port 8080'));
});

gulp.task('default', [
	//'jshint',
	'server',
	'watch',
	'livereload'
]);
