(function() {
  angular
    .module( 'dhWedding.layout' )
    .controller( 'Layout', Layout );

  Layout.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Layout( $scope, $rootScope, resize ) {
    var vm            = this;
    var desktopWidth  = 992;
    var stickySidebar = true;

    // Bindable variables
    vm.menuOpen = false;

    // Bindable functions
    vm.toggleMenu = toggleMenu;


    // Event & Watch Handlers

    $scope.$on( 'resize', toggleStickySidebar );
    $rootScope.$watch( 'loggedIn' , toggleMenu );

    ///////////

    function toggleStickySidebar( data, $event ) {
      stickySidebar = $event.width > desktopWidth;
      vm.menuOpen = stickySidebar && $rootScope.loggedIn ? true : false;
    }

    function toggleMenu() {
      if ( stickySidebar && $rootScope.loggedIn ) {
        vm.menuOpen = true;
      } else {
        vm.menuOpen = $rootScope.loggedIn  ? !vm.menuOpen : false;
      }

      console.log( 'menuOpen: ', vm.menuOpen );
    }
  }

})();


