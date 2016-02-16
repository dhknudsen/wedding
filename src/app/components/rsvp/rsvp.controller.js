(function() {
  angular
    .module( 'dhWedding.rsvp' )
    .controller( 'Rsvp', Rsvp );

  Rsvp.$inject = [ '$scope', '$rootScope', 'resize', '$firebaseObject', 'fbutil' ];

  function Rsvp( $scope, $rootScope, resize, $firebaseObject, fbutil ) {
    var vm = this;

    // Bindable vars
    vm.viewport      = {};
    vm.user          = vm.user;
    vm.numPeople     = _.get( vm.user, 'people.length' );
    vm.statusOptions = getStatusOptions();

    // Bindable functions
    vm.toggleStatus  = toggleStatus;
    vm.toggleClasses = toggleClasses;
    vm.updatePerson  = updatePerson;
    vm.reOpenPerson  = reOpenPerson;
    vm.savePerson    = savePerson;

    /////////

    function activate() {
      resize.trigger();
    }

    function getStatusOptions() {
      return [
        { value: 'accepted',  label: 'Kommer' },
        { value: 'rejected',  label: 'Kommer ikke' },
        { value: 'tentative', label: 'Ikke svaret endnu' }
      ];
    }

    function toggleStatus( person, status ) {
      person.status = person.status === status ? 'tentative' : status;
      vm.user.people.$save( person.id );
    }

    function updatePerson( person, field ) {
      //Only update if updated field is valid
      if ( person.$$form[ field ].$valid ) {
        pruneUndefined( person ); //Handle weird firebase bug that triggers on undefined values
        vm.user.people.$save( person.id );
      }
    }

    function savePerson( person ) {
      if( person.status === 'accepted' && person.$$form.$valid) {
        person.saved = true;
        pruneUndefined( person ); //Handle weird firebase bug that triggers on undefined values
        vm.user.people.$save( person.id );
      } else if ( person.status === 'rejected' ) {
        person.saved = true;
        pruneUndefined( person );
        vm.user.people.$save( person.id );
      }
    }

    function reOpenPerson( person ) {
      person.saved = false;
      person.status = 'tentative';
    }

    function pruneUndefined( object ) {
      _.forEach( object, function( value, key ) {
        if ( key.indexOf( '$' ) > -1 ) return;
        object[ key ] = value !== undefined ? value : null;
      });
    }

    function toggleClasses( person, status ) {
      var isAccepted = status === 'accepted';
      return {
        'is-checked': person.status === (isAccepted ? 'accepted' : 'rejected')
      };
    }

    function getProfile() {
      return $rootScope.user.profile || {};
    }

    function getPeople() {
      return $rootScope.user.people || [];
    }

    function exposeViewportSize( data, $event ) {
      vm.viewport = $event;
    }

  }
})();
