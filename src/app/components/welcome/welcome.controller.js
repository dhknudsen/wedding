(function() {
  angular
    .module( 'dhWedding.welcome' )
    .controller( 'Welcome', Welcome );

  Welcome.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Welcome( $scope, $rootScope, resize ) {
    var vm = this;

    vm.viewport = {};
    vm.user          = vm.user;
    vm.name          = _.get( vm.user, 'profile.name' );
    vm.numPeople     = _.get( vm.user, 'people.length' );

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );

    /////////

    function activate(){
      resize.trigger();
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

  }
})();
