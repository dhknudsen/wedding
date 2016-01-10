(function() {
  angular
    .module( 'dhWedding.programme' )
    .controller( 'Programme', Programme );

  Programme.$inject = [ '$scope', 'ProgrammeData', 'resize' ];

  function Programme( $scope, ProgrammeData, resize ) {
    var vm = this;

    // Bindable vars
    vm.programme = [];
    vm.viewport  = {};

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );

    activate();

    ////////

    function activate() {

      resize.trigger();

      ProgrammeData.then(function( data ) {
        vm.programme = data;
      });
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }
  }
})();
