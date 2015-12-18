(function() {

  angular
    .module( 'dhWedding.security' )
    .run( runBlock );

    runBlock.$inject = [
      '$rootScope',
      '$state',
      '$firebaseObject',
      'Auth',
      'roles',
      'loginRedirectState',
      'logggedInRedirectState',
      'secureRoutes'
    ];

    function runBlock(
      $rootScope,
      $state,
      $firebaseObject,
      Auth,
      roles,
      loginRedirectState,
      logggedInRedirectState,
      secureRoutes
    ) {

      // watch for login status changes and redirect if appropriate
      Auth.$onAuth( checkAuth );

      // watch for state changes and redirect if appropriate
      $rootScope.$on( '$stateChangeStart', handleAuthErrorsAndRedirect );
      $rootScope.$on( '$stateChangeError', handleAuthErrorsAndRedirect );


      ////////

      function checkAuth( user ) {
        if ( !user && authRequired( $state.current.name ) ) {
          //console.log('check failed', user, $state.current.name); //debug
          $state.go( loginRedirectState );
        }
      }

      function authRequired( stateName ) {
        console.log( 'authRequired?', stateName, secureRoutes.hasOwnProperty( stateName ) ); //debug
        return secureRoutes.hasOwnProperty( stateName );
        //return secureRoutes.indexOf(stateName) !== -1;
      }

      function handleAuthErrorsAndRedirect( event, toState, toParams, fromState, fromParams, error ) {

        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if ( error === 'AUTH_REQUIRED' ) {
          $state.go( loginRedirectState );
        }

        if ( Auth.$getAuth() && toState.name === loginRedirectState ) {
          event.preventDefault();
          $state.go( logggedInRedirectState );
        }
      }
    }

}());
