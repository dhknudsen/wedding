(function() {
  angular
    .module( 'dhWedding.admin' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var Roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'admin', {
        url: '/admin',
        views: {
          'main': {
            controller: 'Admin',
            controllerAs: 'vm',
            templateUrl: 'pages/admin/admin.tpl.html'
          }
        },
        data:{ pageTitle: 'Admin' }
      }, Roles.accessLevels.admin );
    }
})();
