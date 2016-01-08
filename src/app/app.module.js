(function() {
  angular
    .module( 'dhWedding', [

      // Shared modules
      'dhWedding.core',
      'dhWedding.security',

      // Feature areas
      'dhWedding.layout',
      'dhWedding.admin',
      'dhWedding.pages'

    ]);
})();

