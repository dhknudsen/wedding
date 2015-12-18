(function() {
  angular
    .module( 'dhWedding.account' )
    .controller( 'Account', Account );

  Account.$inject = [ '$scope', 'Auth', 'fbutil', 'user', '$state', 'loginRedirectState', '$firebaseObject'];

  function Account( $scope, Auth, fbutil, user, $state, loginRedirectState, $firebaseObject ) {

    var unbind;
    var vm            = this;
    var emailpostfix  = '@mogd.dk';
    var profile       = $firebaseObject( fbutil.ref( 'users', user.uid ) );

    //Bindable values
    vm.err            = null;
    vm.msg            = null;
    vm.emailerr       = null;
    vm.emailmsg       = null;

    //Bindable functions
    vm.clear          = resetMessages;
    vm.logout         = logout;
    vm.changeEmail    = changeEmail;
    vm.changePassword = changePassword;

    //
    profile.$bindTo( vm, 'vm.user' ).then( function( ub ) {
      unbind = ub;
    });

    function changeEmail( pass, newEmail ) {

      resetMessages();

      var settings = {
        oldEmail : vm.user.profile.email,
        newEmail : ( newEmail.indexOf( '@' ) === -1 ) ? newEmail + emailpostfix : newEmail,
        password : pass
      };

      Auth.$changeEmail( settings )
        .then( setNewEmail )
        .then( promptChange, promptError );

      function setNewEmail() {
        var ref = fbutil.ref( 'users', vm.user.$id, 'profile', 'email' );

        return fbutil.handler(function( cb ) {
          ref.set( newEmail, cb );
        });
      }

      function promptChange() {
        vm.emailmsg = 'Email changed';
      }

      function promptError( err ) {
        vm.emailerr = err;
      }
    }

    function changePassword( pass, confirm, newPass ) {
      resetMessages();

      if ( !pass || !confirm || !newPass ) {
        vm.err = 'Please fill in all password fields';
      } else if ( newPass !== confirm ) {
        vm.err = 'New pass and confirm do not match';
      } else {
        Auth.$changePassword({ email: vm.user.profile.email, oldPassword: pass, newPassword: newPass })
          .then(function() {
            vm.msg = 'Password changed';
          }, function( err ) {
            vm.err = err;
          });
      }
    }

    function logout() {
      if ( unbind ) unbind();

      profile.$destroy();
      Auth.$unauth();
      $state.go( loginRedirectState );
    }

    function resetMessages() {
      [ vm.err, vm.msg, vm.emailerr, vm.emailmsg ].forEach(function( item ) {
        item = null;
      });
    }
  }

})();

