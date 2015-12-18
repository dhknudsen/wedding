(function() {
  angular
    .module( 'dhWedding.programme' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider' ];

    function configure( $stateProvider, rolesProvider ) {
      var Roles = rolesProvider.$get();
      $stateProvider.stateAuthenticated( 'program', {
        url: '/program',
        views: {
          'main': {
            controller: 'Programme',
            controllerAs: 'vm',
            templateUrl: 'pages/programme/programme.tpl.html',
            resolve: {
              ProgrammePrepData: [ 'ProgrammeData', function(ProgrammeData) {
                return ProgrammeData;
              }]
            }
          }
        },
        data:{ pageTitle: 'Hjem' }
      }, Roles.accessLevels.user );
    }
})();
