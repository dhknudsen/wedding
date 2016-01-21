(function() {
  angular
  .module( 'dhWedding.login' )
  .controller( 'Login', Login );

  Login.$inject = [ '$scope', 'Auth', '$location', 'resize' ];

  function Login( $scope, Auth, $location, resize ) {
    var vm        = this;
    var postfix   = '@mogd.dk';

    //Bindable values
    vm.err        = null;
    vm.processing = false;

    //Bindable functions
    vm.login      = login;

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );

    activate();

    /////////

    function activate() {
      resize.trigger();
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

    function login( email, pass ) {

      if ( email ) {
        // append email postfix if 'email' username is not an email adress
        email = (( email.indexOf( '@' ) === -1 ) ? email + postfix : email).toLowerCase();
      }

      vm.err = null;
      vm.processing = true;

      Auth
        .$authWithPassword({ email: email, password: pass }, { rememberMe: true })
        .then( redirectAfterLogin, displayErrors );
    }

    function redirectAfterLogin( /* user */ ) {
      vm.processing = false;
      $location.path( '/hjem' );
    }

    function displayErrors( err ) {
      vm.processing = false;
      vm.err = errMessage( err );
    }

    function errMessage( err ) {
      return angular.isObject( err ) && err.code ? err.code : err + '';
    }
  }
})();

