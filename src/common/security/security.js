(function (angular) {
  "use strict";

  // when $stateProvider.stateAuthenticated() is called, the path is stored in this list
  // to be used by authRequired() in the services below
  var securedRoutes = {};

  angular.module( 'dhWedding.security', [
    'ui.router', 
    'firebase.utils', 
    'firebase.auth', 
    'dhWedding.config', 
    'dhWedding.roles'
  ])

    .config( ['$stateProvider', 'rolesProviderProvider', function ( $stateProvider, rolesProvider ) {
      
      // credits for this idea: https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
      $stateProvider.stateAuthenticated = function ( stateName, route, accessLevel ) {
        var Roles = rolesProvider.$get();
        securedRoutes[stateName] = accessLevel || Roles.accessLevels.user; // store all secured routes for use with authRequired() below
        route.resolve = route.resolve || {};
        route.resolve.user = ['$rootScope','$q','Auth', '$firebaseObject', 'rolesProvider','fbutil', 
          function ( $rootScope, $q, Auth, $firebaseObject, rolesProvider, fbutil ) {
            var user;
            var loadProfile = function ( userObj ) {
                user = userObj;
                return $firebaseObject( fbutil.ref( 'users', userObj.uid ) );
            };
            var checkAuthorization = function( profile ) {
                return profile.$loaded( function( userProfile ){
                  
                  if( !$rootScope.userProfile || ( $rootScope.userProfile && $rootScope.userProfile.$id !== user.uid ) ){
                    userProfile.$bindTo( $rootScope, 'userProfile' ).then(
                      function( ub ) { $rootScope.unbind = ub; }
                    );
                  }

                  var deferred = $q.defer();
                  
                  // Perform our Authorization check to this route
                  if( securedRoutes[stateName] <= profile.role.level ) {
                    deferred.resolve( user );
                    return deferred.promise;
                  } else {
                    deferred.reject( 'AUTH_REQUIRED' );
                    return deferred.promise;
                  }
                });
            };

            return Auth.$requireAuth().then( loadProfile ).then( checkAuthorization );

          }];
        $stateProvider.state( stateName, route );
        return this;
      };
    }])

    .run(["$rootScope", "$state", '$firebaseObject', 'Auth', 'rolesProvider', 'loginRedirectState', function( $rootScope, $state, $firebaseObject, Auth, Roles, loginRedirectState ) {
      // watch for login status changes and redirect if appropriate
      Auth.$onAuth( check );
      
      $rootScope.$on( "$stateChangeStart", function( event, toState, toParams, fromState, fromParams, error ) {
        //Todo: What to do here?
        if( toState.resolve && toState.resolve.user ) {}
        
        if ( error === "AUTH_REQUIRED" ) {
          $state.go( loginRedirectState );
        }
      });

      $rootScope.$on( "$stateChangeError", function( event, toState, toParams, fromState, fromParams, error ) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        console.log( 'error in state change' );
        if ( error === "AUTH_REQUIRED" ) {
          $state.go( loginRedirectState );
        }
      });

      function check( user ) {
        //console.log(user);
        if ( !user && authRequired( $state.current.name ) ) {
          //console.log('check failed', user, $state.current.name); //debug
          $state.go( loginRedirectState );
        }
      }

      function authRequired(stateName) {
        console.log( 'authRequired?', stateName, securedRoutes.hasOwnProperty( stateName ) ); //debug
        return securedRoutes.hasOwnProperty( stateName );
        //return securedRoutes.indexOf(stateName) !== -1;
      }

    }]);

})( angular );
