(function() {
  angular
    .module( 'dhWedding.programme' )
    .controller( 'Programme', Programme );

  Programme.$inject = [ '$scope', 'ProgrammeData' ];

  function Programme( $scope, ProgrammeData ) {
    var vm = this;

    vm.programme = ProgrammeData;

    ////////

  }
})();
