(function (){
  angular
    .module('dhWedding.directives')
    .directive( 'rsvp', RSVPDirective );

    function RSVPDirective() {
      var directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directives/rsvp/rsvp.tpl.html',
        link: linkFunc,
        controller: RSVPController,
        controllerAs: 'vm',
        bindToController: {
          user: '='
        }
      };

      return directive;

      function linkFunc( scope, el, attr, ctrl ) {}
    }

    RSVPController.$inject = [ '$scope' ];

    function RSVPController() {
      var vm = this;


    }

})();
