(function() {
  angular
    .module( 'dhWedding.wishlist' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'oenskeliste', {
        url: '/oenskeliste',
        views: {
          'main': {
            controller: 'Wishlist',
            controllerAs: 'vm',
            templateUrl: 'pages/wishlist/wishlist.tpl.html'
          }
        },
        data:{ pageTitle: 'Ønskeliste' }
      }, roles.accessLevels.user );
    }
})();
