(function() {
  angular
    .module( 'dhWedding.home' )
    .controller( 'Home', Home );

  Home.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Home( $scope, $rootScope, resize ) {
    var vm = this;

    vm.viewport = null;
    vm.profile = $rootScope.userProfile.profile || {};
    vm.people = $rootScope.userProfile.people || [];

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );
    resize.trigger();

    /////////


    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

  }
})();
