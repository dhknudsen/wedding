(function(){
  angular
    .module( 'dhWedding.navigation' )
    .controller( 'Navigation', Navigation );

    Navigation.$inject = [];

    function Navigation() {
      var vm = this;

      // Bindable vars
      vm.toggle = vm.toggle || false;
    }
})();
