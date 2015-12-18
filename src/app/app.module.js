(function() {
  angular
    .module( 'dhWedding', [

      // Shared modules
      'dhWedding.core',
      'dhWedding.security',

      // Feature areas
      'dhWedding.layout',
      'dhWedding.login',
      'dhWedding.home',
      'dhWedding.programme',
      'dhWedding.admin',
      'dhWedding.account'
    ]);
})();

