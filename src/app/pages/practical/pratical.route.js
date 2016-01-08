(function() {
  angular
    .module( 'dhWedding.practical' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'praktisk', {
        url: '/praktisk',
        views: {
          'main': {
            controller: 'Practical',
            controllerAs: 'vm',
            templateUrl: 'pages/practical/practical.tpl.html'
          }
        },
        data:{ pageTitle: 'Praktisk' }
      }, roles.accessLevels.user );
    }
})();
