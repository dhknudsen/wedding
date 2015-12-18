(function() {
  angular
    .module( 'dhWedding.core' )
    .config( configure );

  configure.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  function configure( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/hjem' );
  }
})();

