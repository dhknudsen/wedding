(function() {
  angular
    .module( 'dhWedding.programme' )
    .controller( 'Programme', Programme );

  Programme.$inject = [ '$scope', 'ProgrammePrepData' ];

  function Programme( $scope, ProgrammePrepData ) {
    var vm = this;

    vm.programme = ProgrammePrepData;

    ////////

  }
})();
