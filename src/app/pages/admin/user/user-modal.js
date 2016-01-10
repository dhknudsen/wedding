(function() {
  angular
    .module( 'dhWedding.admin' )
    .controller( 'AdminUserModal', AdminUserModal );

    AdminUserModal.$inject = [ '$scope', '$uibModalInstance', 'AdminModels', 'user' ];

    function AdminUserModal( $scope, $uibModalInstance, AdminModels, user ) {

      var vm   = this;
      var theUser = user || AdminModels.get( 'newUser' );

      //Bindable properties
      vm.emailpostfix   = '@mogd.dk';
      vm.statusOptions  = AdminModels.get( 'statusOptions' );
      vm.isEdit         = user ? true : false;
      vm.profile        = theUser.profile;
      vm.people         = theUser.people;

      //Bindable functions
      vm.isEmpty      = isEmpty;
      vm.addPerson    = addPerson;
      vm.removePerson = removePerson;
      vm.save         = save;
      vm.cancel       = cancel;

      if ( user ) { splitEmail(); } // split email for edit view


      ///////////


      function isEmpty( array ) {
        return array.length === 0;
      }

      function addPerson() {
        var person = AdminModels.get( 'newPerson', { id: vm.people.length } );
        vm.people.push( person );
      }

      function removePerson( index ) {
        return vm.people.slice( index, 1 );
      }

      function save() {
        var emailString = vm.profile.email.trim();
        vm.profile.email = emailString + emailString.indexOf( '@' ) === -1 ? vm.emailpostfix : '';
        $uibModalInstance.close( theUser );
      }

      function cancel() {
        $uibModalInstance.dismiss( 'cancel' );
      }

      function splitEmail() {
        var mailparts     = user.profile.email.split( '@' );
        vm.emailpostfix   = '@' + mailparts[ 1 ];
        vm.profile.email  = mailparts[ 0 ];
      }
    }
}());
angular.module( 'dhWedding.admin' )


;
