(function() {
  angular
  .module( 'firebase.auth' )
  .factory( 'Auth', AuthFactory );

  AuthFactory.$inject = ['$firebaseAuth', 'fbutil'];

  function AuthFactory( $firebaseAuth, fbutil ) {
    return $firebaseAuth( fbutil.ref() );
  }

}());

