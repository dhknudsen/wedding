(function() {
  angular
    .module( 'dhWedding.admin' )
    .controller( 'Admin', Admin );

    Admin.$inject = [
      '$scope',
      '$rootScope',
      'Auth',
      '$firebaseObject',
      'fbutil',
      '$uibModal',
      'confirmModal',
      'AdminModels'
    ];

    function Admin(
      $scope,
      $rootScope,
      Auth,
      $firebaseObject,
      fbutil,
      $uibModal,
      confirmModal,
      AdminModels
    ) {

      var vm            = this;
      var users         = $firebaseObject( fbutil.ref( 'users' ) );
      var statusOptions = AdminModels.get( 'statusOptions' );

      //Bindable values
      vm.numUsers      = 0;
      vm.numPeople     = 0;
      vm.numAttending  = 0;
      vm.numDeclining  = 0;
      vm.numPending    = 0;

      //Bindable functions
      vm.createUser     = createUser;
      vm.editUser       = editUser;
      vm.deleteUser     = deleteUser;
      vm.onlyActivated  = onlyActivated;
      vm.showStatus     = showStatus;
      vm.setStatusClass = setStatusClass;

      users.$loaded( function( data ) {
        vm.users = users;  //expose data when resolved
      });

      $scope.$watch(  //watch admin.user to update summary values
        function watch( scope ) {
          return ( vm.users );
        },
        function changeHandler( newVal, oldVal ) {
          var numUsers     = 0;
          var numPeople    = 0;
          var numAttending = 0;
          var numDeclining = 0;
          var numPending   = 0;

          var currentUsers = vm.onlyActivated( newVal );

          angular.forEach( currentUsers, function( user, index ) {
            numUsers  += 1;
            numPeople += user.people.length;

            _.forEach( user.people, function( person ) {
              switch ( person.status ) {
                case 'accepted':
                  numAttending += 1;
                  break;
                case 'rejected':
                  numDeclining += 1;
                  break;
                case 'tentative':
                  numPending += 1;
                  break;
                default:
                  //do nothing
              }
            });
          });

          vm.numUsers      = numUsers;
          vm.numPeople     = numPeople;
          vm.numAttending  = numAttending;
          vm.numDeclining  = numDeclining;
          vm.numPending    = numPending;
        }
      );

      function createUser() {
        var modalInstance = $uibModal.open( AdminModels.get( 'newUserModal' ) );
        modalInstance.result.then( createNewUser );
      }

      function editUser( uid, user ) {
        var modalInstance = $uibModal.open( AdminModels.get( 'newUserModal', {
          resolve: {
            user: function() {
              return angular.copy( user );
            }
          }
        }) );

        modalInstance.result.then( function( savedUser ) {
          saveUser( uid, savedUser );
        });
      }

      function deleteUser( uid, user ) {

        var modalOptions = {
          closeButtonText: 'Annullér',
          actionButtonText: 'Slet inviation',
          headerText: 'Slet ' + user.profile.name + '?',
          bodyText: 'Er du sikker på at du vil slette ' + user.profile.name + '?'
        };

        confirmModal.showModal( {}, modalOptions ).then( function( result ) {

          //revoke priviliges
          user.activated = false;
          user.role = {
            level: 0,
            title: 'public'
          };

          users.$save().then(function( ref ) {
           console.log( 'user deleted' );
          });
        });
      }

      //filter users before display
      function onlyActivated( users ) {
        var result = {};
        angular.forEach( users, function( user, uid ) {
            if ( user.hasOwnProperty( 'activated' ) && user.activated && user.role.level === 20 ) {
                result[ uid ] = user;
            }
        });
        return result;
      }

      function showStatus( value ) {
        return _.result( _.findWhere( statusOptions, { 'value': value } ), 'label' );
      }

      function setStatusClass( value ) {
        var classes = {
          tentative: 'info',
          accepted:  'success',
          rejected:  'danger'
        };
        return classes[ value ];
      }

      function userDeactivated( newUser, users ) {
        for ( var uid in users ) {
          if ( users.hasOwnProperty( uid ) && uid.charAt( 0 ) !== '$' ) {
            if ( users[ uid ].profile.email === newUser.profile.email ) {
              return uid;
            }
          }
        }
        return false;
      }

      function createNewUser( newUser ) {
        var uid = userDeactivated( newUser, users );

        if ( uid ) {
          saveUser( uid, newUser );
        } else {
          // create user credentials in Firebase auth system
          Auth.$createUser( { email: newUser.profile.email, password: newUser.profile.pass } )
          .then(function( authData ) {
            saveUser( authData.uid, newUser, function() {
              console.log( 'profile created' );
            });
          }, function( error ) {
            //Todo: Handle error from $createUser
          });
        }
      }

      function saveUser( uid, user, callback ) {
        if ( user.profile.hasOwnProperty( 'pass' ) ) {
          delete user.profile.pass; // remove password before save
        }
        users[ uid ] = user;
        users.$save().then( callback );
      }
    }
})();

