(function() {
  angular
    .module( 'dhWedding.practical' )
    .directive( 'practicalSection', practicalSectionDirective );

  function practicalSectionDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/practical/practical.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'Practical',
      controllerAs: 'vm',
      bindToController: {
        user: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
