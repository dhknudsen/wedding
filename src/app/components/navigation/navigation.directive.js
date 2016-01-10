(function() {
  angular
    .module( 'dhWedding.navigation' )
    .directive( 'sidebarNavigation', sidebarNavigationDirective );

  function sidebarNavigationDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/navigation/navigation.tpl.html',
      scope: {},
      link: linkFunc,
      replace: false,
      controller: 'Navigation',
      controllerAs: 'vm',
      bindToController: {
        toggle: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
