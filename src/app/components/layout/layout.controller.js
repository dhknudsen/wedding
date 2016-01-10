(function() {
  angular
    .module( 'dhWedding.layout' )
    .controller( 'Layout', Layout );

  Layout.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Layout( $scope, $rootScope, resize ) {
    var vm = this;

    // Bindable variables
    vm.menuOpen = false;

    // Bindable functions
    vm.toggleMenu = toggleMenu;

    // Event & Watch Handlers
    $rootScope.$watch( 'loggedIn' , isMenuAllowed );

    ///////////

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


