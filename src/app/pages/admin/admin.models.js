(function(){
  angular
    .module( 'dhWedding.admin' )
    .factory( 'AdminModels', AdminModels );

    function AdminModels() {
      var models = {
        "statusOptions": [
          { value: "accepted",  label: "Kommer" },
          { value: "rejected",  label: "Kommer ikke" },
          { value: "tentative", label: "Ikke svaret endnu" }
        ],

        "newUser": {
          profile: {
            name:   null,
            email:  null,
            pass:   null,
            rvspMessage: null
          },
          people: [],
          role: {
            level: 20,
            title: "user"
          },
          activated: true
        },

        "newPerson": {
          id:         null,
          name:       null,
          comments:   null,
          email:      null,
          phone:      null,
          saved:      false,
          status:     "tentative",
          showOnPage: false,
          updated_at: Firebase.ServerValue.TIMESTAMP
        },

        "newUserModal": {
          animation: true,
          templateUrl: 'pages/admin/user/user-modal.tpl.html',
          controller: 'AdminUserModal',
          controllerAs: 'vm',
          size: 'lg',
          resolve: {
            user: null
          }
        }
      };

      return {
        get: function ( property, options ) {
          if ( models.hasOwnProperty( property ) && options ) {
            return angular.merge( {}, models[ property ], options );
          } else {
            return angular.merge( {}, models[ property ] );
          }
          return undefined;
        }
      };
    }
})();
