(function() {
  angular
  .module( 'firebase.auth' )
  .factory( 'Auth', AuthFactory );

  function AuthFactory( $firebaseAuth, fbutil ) {
    return $firebaseAuth( fbutil.ref() );
  }

}());

