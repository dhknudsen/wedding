(function() {
  angular
    .module( 'dhWedding.rsvp' )
    .controller( 'Rsvp', Rsvp );

  Rsvp.$inject = [ '$scope', '$rootScope', 'resize' ];

  function Rsvp( $scope, $rootScope, resize ) {
    var vm = this;

    // Bindable vars
    vm.viewport  = {};
    vm.profile   = getProfile();
    vm.people    = getPeople();
    vm.numPeople = vm.people.length;

    //Event handling
    $scope.$on( 'resize', exposeViewportSize );

    /////////

    function activate(){
      resize.trigger();
    }

    function getProfile() {
      return $rootScope.userProfile.profile || {};
    }

    function getPeople(){
      return $rootScope.userProfile.people  || [];
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

  }
})();
