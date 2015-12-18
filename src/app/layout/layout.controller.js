(function() {
  angular
    .module( 'dhWedding.layout' )
    .controller( 'Layout', Layout );

  Layout.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Layout( $scope, resize ) {
    var vm = this;

    //$scope Event Handlers
    $scope.$on( 'resize', exposeViewportSize );

    ///////////

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }
  }

})();


