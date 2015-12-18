(function() {
  angular
    .module( 'dhWedding.login' )
    .config( configure );

  configure.$inject = [ '$stateProvider', 'rolesProvider' ];

  function configure( $stateProvider, rolesProvider ) {
    var roles = rolesProvider.$get();
    $stateProvider.state( 'login', {
      url: '/login',
      views: {
        'main': {
          controller: 'Login',
          controllerAs: 'vm',
          templateUrl: 'pages/login/login.tpl.html'
        }
      },
      data: { pageTitle: 'Login' }
    });
  }

})();
