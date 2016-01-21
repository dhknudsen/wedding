(function() {
  angular
    .module( 'dhWedding.home' )
    .controller( 'Home', Home );

  Home.$inject = [ '$scope', '$rootScope', 'resize', 'user' ];

  function Home( $scope, $rootScope, resize, user ) {
    var vm = this;

    // Bindable vars
    vm.viewport = null;
    vm.user = user || getDefault();

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );

    activate();

    /////////

    function activate() {
      resize.trigger();
    }

    function getDefault() {
      return {
        profile: { name: 'Gæst' },
        people: [],
        role: { title: 'user' }
      };
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

  }
})();
