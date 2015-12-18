(function() {
  angular
    .module( 'dhWedding.home' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var Roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'hjem', {
        url: '/hjem',
        views: {
          'main': {
            controller: 'Home',
            controllerAs: 'vm',
            templateUrl: 'pages/home/home.tpl.html'
          }
        },
        data:{ pageTitle: 'Hjem' }
      }, Roles.accessLevels.user );
    }
})();
