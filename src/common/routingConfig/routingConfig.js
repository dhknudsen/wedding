angular.module('dhWedding.roles', [])
  .provider('rolesProvider', function() {
    var roles = {};    
    this.config = {
        
        roles :[
            'public',
            'user',
            'admin'
        ],

        accessLevels : {
            'public' : 0,
            'anon': 10,
            'user' : 20,
            'admin': 99
        }
    };
    
    roles.userRoles = this.config.roles;
    roles.accessLevels = this.config.accessLevels;

    this.$get = function() { 
      return roles;
    };

});