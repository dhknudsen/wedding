  (function() {
    angular
      .module( 'dhWedding.core', [

        // Angular extensions
        'ngAnimate',

        // Supporting modules
        'dhWedding.roles',
        'dhWedding.directives',
        'dhWedding.confirmModal',
        'templates-app',
        'templates-common',
        'firebase.utils',
        'firebase.auth',

        // 3-party dependencies
        'firebase',
        'ui.bootstrap',
        'ui.router'

      ]);
})();
