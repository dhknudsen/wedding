(function(){
  angular
    .module( 'dhWedding.roles' )
    .provider( 'roles', rolesProvider );

    function rolesProvider() {
      this.config = {
        roles : [
          'public',
          'user',
          'admin'
        ],

        accessLevels : {
          'public' : 1,
          'anon'   : 10,
          'user'   : 20,
          'admin'  : 99
        }
      };

      this.$get = function() {
        return {
          userRoles: this.config.roles,
          accessLevels: this.config.accessLevels
        };
      };
    }
}());
