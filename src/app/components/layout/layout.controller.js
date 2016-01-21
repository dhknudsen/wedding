(function() {
  angular
    .module( 'dhWedding.layout' )
    .controller( 'Layout', Layout );

  Layout.$inject = [ '$scope', '$rootScope', 'resize', '$q'];

  function Layout( $scope, $rootScope, resize, $q ) {
    var vm = this;

    // Bindable variables
    vm.menuOpen = false;
    vm.loggedIn = false;
    vm.user = $rootScope.user;

    // Bindable functions
    vm.toggleMenu = toggleMenu;
    vm.logout = logout;

    // Event Handlers
    $rootScope.$watch( 'loggedIn' , setLoggedIn );
    $rootScope.$watch( 'role' , setRole );

    activate();

    ///////////

    function activate() {
      $q.when($rootScope.user).then(function(user){
        vm.user = user;
      });
    }

    function logout() {
      $rootScope.logout();
    }

    function setRole(role) {
      vm.role = role;
    }

    function setLoggedIn(loggedIn){
      vm.loggedIn = loggedIn;
      isMenuAllowed();
    }

    function isMenuAllowed() {
      if(!$rootScope.loggedIn) {
        vm.menuOpen = false;
      }
    }

    function toggleMenu() {
      vm.menuOpen = $rootScope.loggedIn ? !vm.menuOpen : false;
      console.log( 'menuOpen: ', vm.menuOpen );
    }
  }

})();


