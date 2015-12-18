(function(){
  angular
    .module( 'dhWedding.security' )
    .provider( 'secureRoutes', secureRoutesProvider );

    function secureRoutesProvider() {

      // when $stateProvider.stateAuthenticated() is called, the path is stored in this list
      // to be used by authRequired() in the services below
      this.secureRoutes = {};

      this.$get = function () {
        return  this.secureRoutes;
      }.bind(this);

    }
}());
