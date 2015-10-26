(function (angular) {
  "use strict";

  // when $stateProvider.stateAuthenticated() is called, the path is stored in this list
  // to be used by authRequired() in the services below
  var securedRoutes = {};

  angular.module('dhWedding.security', [
    'ui.router', 
    'firebase.utils', 
    'firebase.auth', 
    'dhWedding.config', 
    'dhWedding.roles'
  ])

    /**
     * Adds a special `stateAuthenticated` method onto $routeProvider. This special method,
     * when called, waits for auth status to be resolved asynchronously, and then fails/redirects
     * if the user is not properly authenticated.
     *
     * The promise either resolves to the authenticated user object and makes it available to
     * dependency injection (see AuthCtrl), or rejects the promise if user is not logged in,
     * forcing a redirect to the /login page
     */
    .config(['$stateProvider', 'rolesProviderProvider', function ($stateProvider, rolesProvider) {
      // credits for this idea: https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
      // unfortunately, a decorator cannot be use here because they are not applied until after
      // the .config calls resolve, so they can't be used during route configuration, so we have
      // to hack it directly onto the $routeProvider object
      $stateProvider.stateAuthenticated = function (stateName, route, accessLevel) {
        var Roles = rolesProvider.$get();
        securedRoutes[stateName] = accessLevel || Roles.accessLevels.user; // store all secured routes for use with authRequired() below
        route.resolve = route.resolve || {};
        route.resolve.user = ['$rootScope','$q','Auth', '$firebaseObject', 'rolesProvider','fbutil', 
          function ($rootScope, $q, Auth, $firebaseObject, rolesProvider, fbutil) {
            var user;
            var loadProfile = function (userObj) {
                user = userObj;
                return $firebaseObject(fbutil.ref('users', userObj.uid));
            };
            var checkAuthorization = function(profile) {
                return profile.$loaded(function(userProfile){
                  if(!$rootScope.userProfile || ($rootScope.userProfile && $rootScope.userProfile.$id !== user.uid)){
                    userProfile.$bindTo($rootScope, 'userProfile').then(
                      function(ub) { $rootScope.unbind = ub; }
                    );
                  }
                  var deferred = $q.defer();
                  
                  if(securedRoutes[stateName] <= profile.role.level) {
                    deferred.resolve(user);
                    return deferred.promise;
                  } else {
                    deferred.reject('AUTH_REQUIRED');
                    return deferred.promise;
                  }
                });
            };

            return Auth.$requireAuth().then(loadProfile).then(checkAuthorization);

          }];
        $stateProvider.state(stateName, route);
        return this;
      };
    }])

    /**
     * Apply some route security. Any route's resolve method can reject the promise with
     * { authRequired: true } to force a redirect. This method enforces that and also watches
     * for changes in auth status which might require us to navigate away from a path
     * that we can no longer view.
     */

  

    .run(["$rootScope", "$state", '$firebaseObject', 'Auth', 'rolesProvider', 'loginRedirectState', function($rootScope, $state, $firebaseObject, Auth, Roles, loginRedirectState) {
      // watch for login status changes and redirect if appropriate
      Auth.$onAuth(check);
      // Auth.$onAuth(function(user) {
      //   $rootScope.loggedIn = !!user;
      //   if(user && !rootScope.profile){
      //     // create a 3-way binding with the user profile object in Firebase
      //     var profile = $firebaseObject(fbutil.ref('users', user.uid));
      //     profile.$bindTo($rootScope, 'profile').then(function(ub) { 
      //       $rootScope.unbind = ub; 
      //     });

      //   }
      // }); 

      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, error) {
        


        if(toState.resolve && toState.resolve.user) {

        }
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        
        if (error === "AUTH_REQUIRED") {
          $state.go(loginRedirectState);
        }
      });


      $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        console.log('error in state change');
        if (error === "AUTH_REQUIRED") {
          $state.go(loginRedirectState);
        }
      });

      function check(user) {
        console.log(user);
        if (!user && authRequired($state.current.name)) {
          console.log('check failed', user, $state.current.name); //debug
          $state.go(loginRedirectState);
        }
      }

      function authRequired(stateName) {
        console.log('authRequired?', stateName, securedRoutes.hasOwnProperty(stateName)); //debug
        return securedRoutes.hasOwnProperty(stateName);
        //return securedRoutes.indexOf(stateName) !== -1;
      }

    }]);

   })(angular);
