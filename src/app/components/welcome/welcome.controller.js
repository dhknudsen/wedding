(function() {
  angular
    .module( 'dhWedding.welcome' )
    .controller( 'Welcome', Welcome );

  Welcome.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Welcome( $scope, $rootScope, resize ) {
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
