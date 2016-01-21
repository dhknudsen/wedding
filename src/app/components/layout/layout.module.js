(function(){
  angular
    .module( 'dhWedding.layout', [
      // core modules
      'dhWedding.core',
      'dhWedding.security',

      // layout components
      'dhWedding.navigation',
      'dhWedding.stickyHeader',

      // 3-party dependencies (outside of core)
      //'placeholders'


    ]);
})();
