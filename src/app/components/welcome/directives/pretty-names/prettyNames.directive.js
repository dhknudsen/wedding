(function() {
  angular
    .module( 'dhWedding.welcome' )
    .directive( 'prettyNames', prettyNamesDirective );

  function prettyNamesDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/welcome/directives/pretty-names/prettyNames.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'PrettyNames',
      controllerAs: 'vm',
      bindToController: {
        name: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
