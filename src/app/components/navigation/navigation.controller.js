(function() {
  angular
    .module( 'dhWedding.navigation' )
    .controller( 'Navigation', Navigation );

    Navigation.$inject = [ '$rootScope', '$q', 'smoothScroll', '$timeout', '$state' ];

    function Navigation( $rootScope, $q, smoothScroll, $timeout, $state ) {
      var vm = this;
      var profile = {};

      // Bindable vars
      vm.toggle    = vm.toggle || false;
      vm.isAdmin   = false;
      vm.loggedIn  = $rootScope.loggedIn;
      vm.user      = vm.user;

      // Bindable functions
      vm.logout    = vm.logout || logout;
      vm.closeMenu = closeMenu;

      // Event Handling
      $rootScope.$watch( 'user.role', updateAccess );
      $rootScope.$watch( 'loggedIn', updateLoggedIn );

      activate();

      ///////

      function activate() {}

      function closeMenu(page){

        if($state.current.name !== page && page !== 'overlay'){
          $state.go(page);
        }

        $timeout(function(){
          vm.toggle = false;
        });

      }

      function goTo() {

      }

      function updateLoggedIn( loggedIn ) {
        vm.loggedIn = loggedIn;
      }

      function updateAccess( role ) {
        if ( !role ) return false;

        vm.isAdmin = role.title === 'admin';
      }

      function logout() {
        $rootScope.logout();
      }
    }
})();
