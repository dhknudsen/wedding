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
        person.updated_at = Firebase.ServerValue.TIMESTAMP;

        //Handle weird firebase bug that triggers on undefined values
        pruneUndefined( person );
        vm.user.people.$save( person.id );
      }
    }

    function savePerson( person ) {
      var isValid     = person.$$form.$valid;
      var hasAccepted = person.status === 'accepted';
      var hasRejected = person.status === 'rejected';

      if ( ( hasAccepted && isValid ) || hasRejected ) {
        person.saved      = true;
        person.updated_at = Firebase.ServerValue.TIMESTAMP;

        //Handle weird firebase bug that triggers on undefined values
        pruneUndefined( person );
        vm.user.people.$save( person.id );
      }
    }

    function reOpenPerson( person ) {
      person.saved      = false;
      person.status     = 'tentative';
      person.updated_at = Firebase.ServerValue.TIMESTAMP;

      //Handle weird firebase bug that triggers on undefined values
      pruneUndefined( person );
      vm.user.people.$save( person.id );
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
