(function() {
  angular
    .module( 'dhWedding.security' )
    .config( configure );

    configure.$inject = [ '$stateProvider', 'rolesProvider','secureRoutesProvider'];

    function configure( $stateProvider, rolesProvider, secureRoutesProvider ) {

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
                    .then( loadRole )
                    .then( checkAuthorization );

          ///////

          function loadRole( userObj ) {
            var role = _.get($rootScope, 'user.role'); // Got local roles if present, otherwise fetch from FB
            return role ? role : $firebaseObject( fbutil.ref( ['users', userObj.uid, 'role' ] ) );
          }

          function checkAuthorization( role ) {
            // role is FB obj, and should have $loaded prop, but check just in case.
            return role.$loaded ? role.$loaded( checkRole ) : checkRole( role );
          }

          function checkRole( role ) {

            var deferred = $q.defer();

            // Perform our Authorization check to this route
            if ( secureRoutes[ stateName ] <= role.level ) {
              deferred.resolve( $rootScope.user );
            } else {
              deferred.reject( 'AUTH_REQUIRED' );
            }

            return deferred.promise;
          }

        }

        return this;
      };
    }
}());
