/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once it's
	 * completely built.
	 */
	build_dir: 'build',
	prod_dir: 'prod',
	compile_dir: 'bin',

	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctpl` contains
	 * our reusable components' (`src/common`) template HTML files, while
	 * `atpl` contains the same, but for our app's code. `html` is just our
	 * main HTML file, `less` is our main stylesheet, and `unit` contains our
	 * app's unit tests.
	 */
	app_files: {

    js: [ 'src/**/*.js', '!src/**/*.module.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
		jsunit: [ 'src/**/*.spec.js' ],
    jsmodules: [ 'src/app/app.module.js', 'src/**/*.module.js' ],

		coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
		coffeeunit: [ 'src/**/*.spec.coffee' ],

		atpl: [ 'src/app/**/*.tpl.html' ],
		ctpl: [ 'src/common/**/*.tpl.html' ],

		html: [ 'src/index.html' ],
		less: 'src/less/main.less',

		scss: 'src/scss/main.scss'
	},

	/**
	 * This is a collection of files used during testing only.
	 */
	test_files: {
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},

	/**
	 * This is the same as `app_files`, except it contains patterns that
	 * reference vendor code (`vendor/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `vendor_files.js`.
	 *
	 * The `vendor_files.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `vendor_files.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `vendor_files.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 */
	vendor_files: {
		js: [
      // Vanila JS dependencies
      //'vendor/lodash/lodash.js',
      'vendor/animation-frame/AnimationFrame.js',
      'vendor/shifty/dist/shifty.js',
      'vendor/rekapi/dist/rekapi.js',
			//'vendor/firebase/firebase.js',

      // Framework/Libs
      //'vendor/jquery/dist/jquery.js',
			//'vendor/angular/angular.js',

      // Angular provided extensions
      //'vendor/angular-resource/angular-resource.min.js',
      //'vendor/angular-animate/angular-animate.min.js',
      //'vendor/angular-route/angular-route.min.js',

      // 3-party Angular plugins/extensions

        // Angular UI
        //'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
        //'vendor/angular-ui-router/release/angular-ui-router.js',

        // Firebase
        //'vendor/angularfire/dist/angularfire.js',

        // Global notifications
        'vendor/angular-toastr/dist/angular-toastr.tpls.js',

        // GLobal resize handling
        'vendor/ng-resize/dist/ng-resize.js',

        // Scroll plugins
        'vendor/spark-scroll/src/spark-scroll.js',
        'vendor/ngSmoothScroll/lib/angular-smooth-scroll.js',

        // Masonry grid plugin
        //'vendor/angulargrid/angulargrid.js',

        // Other
        //'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
        //'vendor/angular-image-crop/image-crop.js'
		],
		css: [
			//'vendor/angular-image-crop/image-crop-styles.css',
      'vendor/angular-toastr/dist/angular-toastr.css'
		],
		assets: [
		]
	}
};
