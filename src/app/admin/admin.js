angular.module( "dhWedding.admin", [
  "ui.bootstrap",
  "ui.router",
  "dhWedding.roles"
])

.config(function config( $stateProvider, rolesProviderProvider ) {
  var Roles = rolesProviderProvider.$get();
  $stateProvider.stateAuthenticated( "admin", {
    url: "/admin",
    views: {
      "main": {
        controller: "AdminCtrl",
        templateUrl: "admin/admin.tpl.html"
      }
    },
    data:{ pageTitle: "Admin" }
  }, Roles.accessLevels.admin );
})

.controller( "AdminCtrl", function AdminController( $scope, $rootScope, Auth, $firebaseObject, fbutil, $uibModal ) {

  var users = $firebaseObject( fbutil.ref( "users" ) );
  var admin = {};

  users.$loaded(function( data ) {
    admin.users = users;
    console.log( users );
    admin.createNew = function() {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: "admin/create/create-modal.tpl.html",
        controller: "CreateModalCtrl",
        size: "lg",
        resolve: {
        }
      });

      modalInstance.result.then(function( newUser ) {
        console.log("newUser: ", newUser );

        // create user credentials in Firebase auth system
        Auth.$createUser({ email: newUser.profile.email, password: newUser.profile.pass })
        .then(function( authData ) {
          console.log( "user created" );
          //store additional user data on new user instance
          createProfile( authData, newUser );
        });
      });
  };

  });

  $scope.admin = admin;

  function createProfile( authData, newUser ) {

    console.log("let's create a new user");
    console.log("authData: ", authData );
    console.log("newUser: ", newUser );

    delete newUser.profile.pass;

    users[ authData.uid ] = newUser;

    users.$save().then(function(ref) {
      console.log('user saved');
    });
  }

})

;

