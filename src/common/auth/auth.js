angular.module('firebase.auth', ['firebase', 'firebase.utils'])
  .factory('Auth', ['$firebaseAuth', 'fbutil', function($firebaseAuth, fbutil) {
    var fbAuth = $firebaseAuth(fbutil.ref());
    console.log(fbAuth);
    return fbAuth;
  }]);