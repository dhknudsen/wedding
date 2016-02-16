(function() {
  angular
    .module( 'dhWedding.admin' )
    .controller( 'Admin', Admin );

    Admin.$inject = [
      '$scope', '$rootScope', 'Auth', '$firebaseObject',
      'fbutil', '$uibModal', 'confirmModal', 'AdminModels'
    ];

    function Admin(
      $scope, $rootScope, Auth, $firebaseObject,
      fbutil, $uibModal, confirmModal, AdminModels
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

      vm.sortType     = 'name'; // set the default sort type
      vm.sortReverse  = false;  // set the default sort order
      vm.searchFilter = '';
      vm.statusFilter = '';

      //Bindable functions
      vm.sort           = sort;
      vm.createUser     = createUser;
      vm.editUser       = editUser;
      vm.deleteUser     = deleteUser;
      //vm.showStatus     = showStatus;
      vm.setStatusClass = setStatusClass;
      vm.clearSearch    = clearSearch;
      vm.filter = filter;

      activate();

      ///////

      function activate() {

        users
          .$loaded()
          .then( startWatch )
          .then( filterActivated )
          .then( updateStats )
          .then( buildPeopleArray );
      }

      function clearSearch() {
        vm.searchFilter = '';
      }

      function filter(status) {
        if (status === 'all') {
          vm.statusFilter = '';
        } else {
          vm.statusFilter = vm.statusFilter === status ? '' : status;
        }
      }

      function startWatch( users ) {
        users.$watch( updateAdminPage );
        return users;
      }

      function updateAdminPage( $event ) {
        updateStats(users);
        buildPeopleArray( filterActivated( users ) );
      }

      //filter users before display
      function filterActivated( users ) {
        var result = {};
        angular.forEach( users, function( user, uid ) {
          if ( user.hasOwnProperty( 'activated' ) && user.activated && user.role.level === 20 ) {
            result[ uid ] = user;
          }
        });
        return result;
      }

      function buildPeopleArray( users ) {
        var people = [];
        angular.forEach(users, function (user , key) {
          if (user.people && angular.isArray(user.people)) {
            _.forEach(user.people, function(invitePerson) {
              var person = angular.extend({
                invite: _.get(user, 'profile.name'),
                rsvp: showStatus( invitePerson.status ),
                uid: key
              }, invitePerson);

              people.push(person);
            });
          }
        });
        vm.users = users;
        vm.people = people;
        return people;
      }

      function updateStats( users ) {

        var numUsers     = 0;
        var numPeople    = 0;
        var numAttending = 0;
        var numDeclining = 0;
        var numPending   = 0;

        var currentUsers = filterActivated( users );

        angular.forEach( currentUsers, function( user, index ) {

          numUsers  += 1;
          numPeople += user.people.length;

          _.forEach( user.people, function( person ) {
            //console.log('testing: ', person);
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

        console.log('updateStats', users);

        vm.numUsers      = numUsers;
        vm.numPeople     = numPeople;
        vm.numAttending  = numAttending;
        vm.numDeclining  = numDeclining;
        vm.numPending    = numPending;

        return users;
      }

      function sort(propName) {
        vm.sortType = propName;
        vm.sortReverse = !vm.sortReverse;
      }

      function createUser() {
        var modalInstance = $uibModal.open( AdminModels.get( 'newUserModal' ) );
        modalInstance.result.then( createNewUser );
      }

      function editUser( uid ) {
        var modalInstance = $uibModal.open( AdminModels.get( 'newUserModal', {
          resolve: {
            user: function() {
              return angular.copy( users[uid] );
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

      function showStatus( value ) {
        return _.result( _.find( statusOptions, { 'value': value } ), 'label' );
      }

      function setStatusClass( value ) {
        var classes = {
          tentative: 'label-info',
          accepted:  'label-success',
          rejected:  'label-danger'
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

