(function() {
  angular
    .module( 'dhWedding.programme' )
    .directive( 'programmeSection', programmeSectionDirective );

  function programmeSectionDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/programme/programme.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'Programme',
      controllerAs: 'vm',
      bindToController: {
        //...//
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
