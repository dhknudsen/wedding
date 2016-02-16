(function() {
  angular
    .module( 'dhWedding.rsvp' )
    .directive( 'rsvpSection', rsvpSectionDirective );

  function rsvpSectionDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/rsvp/rsvp.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'Rsvp',
      controllerAs: 'vm',
      bindToController: {
        user: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
