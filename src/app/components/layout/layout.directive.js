(function() {
  angular
    .module( 'dhWedding.layout' )
    .directive( 'appLayout', appLayoutDirective );

  function appLayoutDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/layout/layout.tpl.html',
      scope: true,
      link: linkFunc,
      replace: true,
      controller: 'Layout',
      controllerAs: 'vm',
      bindToController: {
        //...//
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
