(function() {
  angular
    .module( 'dhWedding.home' )
    .controller( 'Home', Home );

  Home.$inject = [ '$scope', 'Programme' ];

  function Home( $scope, Programme ) {
    var vm = this;

    Programme.then(function( data ) {
      vm.programme = data;
    });
  }
})();
