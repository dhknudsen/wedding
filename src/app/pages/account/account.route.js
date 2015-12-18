(function() {
  angular
    .module( 'dhWedding.account' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var Roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'account', {
        url: '/account',
        views: {
          'main': {
            controller: 'Account',
            controllerAs: 'vm',
            templateUrl: 'pages/account/account.tpl.html',
            bindToController: true
          }
        },
        data:{ pageTitle: 'Account' }
      }, Roles.accessLevels.user );
    }
})();
