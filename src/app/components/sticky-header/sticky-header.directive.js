(function() {
  angular
    .module( 'dhWedding.stickyHeader' )
    .directive( 'stickyHeader', stickyHeaderDirective );

  function stickyHeaderDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/sticky-header/sticky-header.tpl.html',
      scope: {},
      link: linkFunc,
      replace: false,
      controller: 'StickyHeader',
      controllerAs: 'vm',
      bindToController: {
        onClick: '=',
        toggle: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
