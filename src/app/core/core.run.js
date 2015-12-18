(function() {
  angular
    .module( 'dhWedding.core' )
    .run( runBlock );

    runBlock.$inject = [ '$rootScope', '$state', 'Auth', 'fbutil', '$firebaseObject' ];

    function runBlock( $rootScope, $state, Auth, fbutil, $firebaseObject ) {

      // Expose global user state management
      // vars and functions on rootScope

      $rootScope.logout = logout;

      // set page title on state change
      $rootScope.$on( '$stateChangeSuccess', setPageTitle );

      // track status of authentication
      Auth.$onAuth( updateUserState );


      ////////

      function logout() {
        if ( $rootScope.unbind ){
          $rootScope.unbind();
        }

        if( $rootScope.userProfile ) {
          $rootScope.userProfile.$destroy();
        }

        Auth.$unauth();
        $state.go( loginRedirectState );
      }

      function updateUserState( user ) {
        $rootScope.loggedIn = !!user;

        if ( user ) {
          // create a 3-way binding with the user profile object in Firebase
          $firebaseObject( fbutil.ref( 'users', user.uid ) )
            .$bindTo( $rootScope, 'userProfile' )
            .then(function( ub ) {
              $rootScope.unbind = ub;
            });
        }
      }

      function setPageTitle( event, toState, toParams, fromState, fromParams ) {
        if ( angular.isDefined( toState.data.pageTitle ) ) {
          $rootScope.pageTitle = toState.data.pageTitle + ' | dhWedding' ;
        }
      }
    }

})();
