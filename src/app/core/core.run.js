(function() {
  angular
    .module( 'dhWedding.core' )
    .run( runBlock );

    runBlock.$inject = [ '$q', '$rootScope', '$state', 'Auth', 'fbutil', '$firebaseObject', '$firebaseArray', 'loginRedirectState' ];

    function runBlock( $q, $rootScope, $state, Auth, fbutil, $firebaseObject, $firebaseArray, loginRedirectState ) {

      // Expose global user state management
      // vars and functions on rootScope

      $rootScope.logout = logout;
      $rootScope.user   = updateUserState( Auth.$getAuth() );

      // set page title on state change
      $rootScope.$on( '$stateChangeSuccess', onStateSucces );

      // track status of authentication
      Auth.$onAuth( updateUserState );


      ////////

      function logout() {
        // This triggers updateUserState
        // that will destroy user session
        Auth.$unauth();
        $state.go( loginRedirectState );
      }

      function updateUserState( user ) {
        $rootScope.loggedIn = !!user;

        if ( user ) {
          var promise = createRootUser( user );

          promise.then(function( result ) {
            $rootScope.user = result;
          });

          $rootScope.user = promise;

          return promise;

        } else {
          if ( $rootScope.user ) {
            destroyUserData( $rootScope.user );
          }
          return null;
        }
      }

      function createRootUser( user ) {
        var promises = {};
        var props    = [ 'role', 'profile', 'people' ];

        props.forEach(function( item ) {

          var conf    = fbutil.ref( [ 'users', user.uid, item ] );
          var defered = $q.defer();
          var isArray = item === 'people';
          var fire    = isArray ? $firebaseArray : $firebaseObject;

          promises[ item ] = defered.promise;

          fire( conf ).$loaded()
            .then(function( result ) {
              defered.resolve( result );
            });
        });

        return $q.all( promises );

      }

      function destroyUserData( rootUser ) {
        rootUser.role.$destroy();
        rootUser.profile.$destroy();
        rootUser.people.$destroy();
      }

      function onStateSucces( event, toState, toParams, fromState, fromParams ) {

        //Ensure all resize dependent code is executed on state load (sligthly hacky)
        angular.element(window).triggerHandler('resize');

        //Set the page title
        if ( angular.isDefined( toState.data.pageTitle ) ) {
          $rootScope.pageTitle = toState.data.pageTitle ;
          $rootScope.title = toState.data.pageTitle + ' | M+D' ;
        }
      }
    }

})();
