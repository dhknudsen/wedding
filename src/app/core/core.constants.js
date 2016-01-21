(function() {
  angular
    .module( 'dhWedding.core' )

    // app version number
    .constant( 'version', '0.4.0' )

    // where to redirect users if they need to authenticate (see security.js)
    .constant( 'loginRedirectState', 'login' )

    // where to redirect users to from login if they have authentication (see security.js)
    .constant( 'logggedInRedirectState', 'hjem' )

    // your Firebase data URL goes here, no trailing slash
      // DEVELOPMENT ENDPOINT
      //.constant( 'FBURL', 'https://md-development.firebaseio.com' );

      // PRODUCTION (BEWARE - THERE BE DRAGONS)
      .constant( 'FBURL', 'https://dhk-angular-auth.firebaseio.com' );

})();
