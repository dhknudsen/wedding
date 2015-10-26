angular.module( 'dhWedding', [
  'dhWedding.config',
  'dhWedding.security',
  'templates-app',
  // 'templates-common',
  'ui.router',
  'angular-flexslider',
  'angular-parallax',
  'ngResize',
  'firebase.utils', 
  'firebase.auth', 
  //pages
  'dhWedding.home',
  'dhWedding.about',
  'dhWedding.admin',
  'dhWedding.account',
  'dhWedding.login'
])

.config( function dhWeddingConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run( $rootScope, Auth, fbutil, $firebaseObject) {
  // track status of authentication
  Auth.$onAuth(function(user) {
    $rootScope.loggedIn = !!user;
    console.log('runrunrun');
    if(user){
      // create a 3-way binding with the user profile object in Firebase
      var profile = $firebaseObject(fbutil.ref('users', user.uid));
      profile.$bindTo($rootScope, 'profile').then(function(ub) { 
        $rootScope.unbind = ub; 
      });  
    }
  });           
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $rootScope, Auth, $state, fbutil, resize ) {
  

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | dhWedding' ;
    }
  });

  $scope.$on('resize', function(data, $event){
    $scope.viewport = $event;
  });

  $scope.slides = [
    'url(/assets/images/mogd.jpg)'
  ];

  $scope.email = null;
  $scope.pass = null;
  $scope.confirm = null;
  $scope.createMode = false;

  $scope.login = function(email, pass) {
    $scope.err = null;
    Auth.$authWithPassword({ email: email, password: pass }, {rememberMe: true})
      .then(function(user) {
        $state.go('about');
      }, function(err) {
        $scope.err = errMessage(err);
      });
  };

  // expose logout function to scope
  $scope.logout = function() {
    if( $rootScope.unbind ) { $rootScope.unbind(); }
    $rootScope.profile.$destroy();
    Auth.$unauth();
    $state.go(loginRedirectState);
  };

  $scope.createAccount = function() {
    $scope.err = null;
    if( assertValidAccountProps() ) {
      var email = $scope.email;
      var pass = $scope.pass;
      // create user credentials in Firebase auth system
      Auth.$createUser({email: email, password: pass})
        .then(function() {
          // authenticate so we have permission to write to Firebase
          return Auth.$authWithPassword({ email: email, password: pass });
        })
        .then(function(user) {
          // create a user profile in our data store
          var ref = fbutil.ref('users', user.uid);
          return fbutil.handler(function(cb) {
            ref.set({email: email, name: name||firstPartOfEmail(email)}, cb);
          });
        })
        .then(function(/* user */) {
          // redirect to the account page
          $location.path('/account');
        }, function(err) {
          $scope.err = errMessage(err);
        });
    }
  };

  function assertValidAccountProps() {
    if( !$scope.email ) {
      $scope.err = 'Please enter an email address';
    }
    else if( !$scope.pass || !$scope.confirm ) {
      $scope.err = 'Please enter a password';
    }
    else if( $scope.createMode && $scope.pass !== $scope.confirm ) {
      $scope.err = 'Passwords do not match';
    }
    return !$scope.err;
  }

  function errMessage(err) {
    return angular.isObject(err) && err.code? err.code : err + '';
  }

  function firstPartOfEmail(email) {
    return ucfirst(email.substr(0, email.indexOf('@'))||'');
  }

  function ucfirst (str) {
    // inspired by: http://kevin.vanzonneveld.net
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
  }

})

;

