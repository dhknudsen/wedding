(function() {
  angular
  .module( 'dhWedding.login' )
  .controller( 'Login', Login );

  Login.$inject = [ 'Auth', '$location' ];

  function Login( Auth, $location ) {
    var vm            = this;
    var emailpostfix  = '@mogd.dk';

    //Bindable values
    vm.err = null;
    vm.processingLogin = false;

    //Bindable functions
    vm.login = login;

    /////////

    function login( email, pass ) {

      if ( email ) {
        email = (( email.indexOf( '@' ) === -1 ) ? email + emailpostfix : email).toLowerCase();
      }

      vm.err = null;

      Auth.$authWithPassword({ email: email, password: pass }, { rememberMe: true })
        .then(function( /* user */ ) {
          vm.processingLogin = true;
          $location.path( '/hjem' );
        }, function( err ) {
          vm.processingLogin = false;
          vm.err = errMessage( err );
        });
    }

    function errMessage( err ) {
      return angular.isObject( err ) && err.code ? err.code : err + '';
    }
  }
})();

