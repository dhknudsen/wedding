(function() {
  angular
    .module( 'dhWedding', [

      // Shared modules
      'dhWedding.core',
      'dhWedding.security',

      // main layout
      'dhWedding.layout',

      // Feature areas
      'dhWedding.admin',
      'dhWedding.pages'

    ]);
})();

