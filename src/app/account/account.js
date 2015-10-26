
angular.module('dhWedding.account', [
  'firebase', 
  'firebase.utils', 
  'firebase.auth', 
  'ui.router'
])

.config(function config ( $stateProvider ) {
  // require user to be authenticated before they can access this page
  // this is handled by the .stateAuthenticated method declared in
  // components/router/router.js
  $stateProvider.stateAuthenticated('account', {
    url: '/account',
    views: {
      "main" : {
        templateUrl: 'account/account.tpl.html',
        controller: 'AccountCtrl'    
      }
    },
    data:{ pageTitle: 'Account' }
  })
})

.controller('AccountCtrl', function AccountController( $scope, Auth, fbutil, user, $state, loginRedirectState, $firebaseObject) {
  var unbind;
  // create a 3-way binding with the user profile object in Firebase
  var profile = $firebaseObject(fbutil.ref('users', user.uid));
  profile.$bindTo($scope, 'profile').then(function(ub) { unbind = ub; });

  console.log('user: ', user);

  // expose logout function to scope
  $scope.logout = function() {
    if( unbind ) { unbind(); }
    profile.$destroy();
    Auth.$unauth();
    $state.go(loginRedirectState);
  };

  $scope.changePassword = function(pass, confirm, newPass) {
    resetMessages();
    if( !pass || !confirm || !newPass ) {
      $scope.err = 'Please fill in all password fields';
    }
    else if( newPass !== confirm ) {
      $scope.err = 'New pass and confirm do not match';
    }
    else {
      Auth.$changePassword({email: profile.email, oldPassword: pass, newPassword: newPass})
        .then(function() {
          $scope.msg = 'Password changed';
        }, function(err) {
          $scope.err = err;
        })
    }
  };

  $scope.clear = resetMessages;

  $scope.changeEmail = function(pass, newEmail) {
    resetMessages();
    var oldEmail = profile.email;
    Auth.$changeEmail({oldEmail: oldEmail, newEmail: newEmail, password: pass})
      .then(function() {
        // store the new email address in the user's profile
        return fbutil.handler(function(done) {
          fbutil.ref('users', user.uid, 'email').set(newEmail, done);
        });
      })
      .then(function() {
        $scope.emailmsg = 'Email changed';
      }, function(err) {
        $scope.emailerr = err;
      });
  };

  function resetMessages() {
    $scope.err = null;
    $scope.msg = null;
    $scope.emailerr = null;
    $scope.emailmsg = null;
  }
})

;
