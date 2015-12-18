(function() {
  angular
    .module( 'dhWedding.security' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider','secureRoutesProvider'];

    function configure( $stateProvider, rolesProvider, secureRoutesProvider ) {

      // credits for this idea:
      // https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
      $stateProvider.stateAuthenticated = function ( stateName, route, accessLevel ) {
        route.resolve    = route.resolve || {};
        var roles        = rolesProvider.$get();
        var secureRoutes = secureRoutesProvider.$get();

        // store all secured routes for use with 'checkUserAuth()' below
        secureRoutes[ stateName ] = accessLevel || roles.accessLevels.user;

        // if checkUserAuth rejects its promise,
        // the route will be dismissed and redirected to login
        route.resolve.user = checkUserAuth;

        $stateProvider.state( stateName, route );

        ////////

        checkUserAuth.$inject = [
          '$rootScope',
          '$q',
          'Auth',
          '$firebaseObject',
          'fbutil',
          'secureRoutes',
          'loginRedirectState'
        ];

        function checkUserAuth(
          $rootScope,
          $q,
          Auth,
          $firebaseObject,
          fbutil,
          secureRoutes,
          loginRedirectState
        ) {

          var user;
          return  Auth.$requireAuth()
                    .then( loadProfile )
                    .then( checkAuthorization );

          ///////

          function loadProfile( userObj ) {
            user = userObj;
            return $firebaseObject( fbutil.ref( 'users', userObj.uid ) );
          }

          function checkAuthorization( profile ) {
            return profile.$loaded(function checkProfile( userProfile ) {

              var deferred = $q.defer();
              var notSameUserProfile = ( $rootScope.userProfile && $rootScope.userProfile.$id !== user.uid );

              if ( !$rootScope.userProfile || notSameUserProfile ) {
                userProfile
                  .$bindTo( $rootScope, 'userProfile' )
                  .then( function( ub ) { $rootScope.unbind = ub; } );
              }

              // Perform our Authorization check to this route
              if ( secureRoutes[ stateName ] <= userProfile.role.level ) {
                deferred.resolve( user );
              } else {
                deferred.reject( 'AUTH_REQUIRED' );
              }

              return deferred.promise;
            });
          }
        }

        return this;
      };
    }
}());
