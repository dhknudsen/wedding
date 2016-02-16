(function(){
  angular
    .module( 'dhWedding.stickyHeader' )
    .controller( 'StickyHeader', StickyHeader );

    StickyHeader.$inject = [];

    function StickyHeader() {
      var vm = this;

      // Bindable vars
      vm.onClick = vm.onClick || onClick;
      vm.toggle  = vm.toggle  || false;

      /////

      function onClick() {}
    }
})();
