(function() {
  angular
    .module( 'dhWedding.welcome' )
    .directive( 'welcomeSection', welcomeSectionDirective );

  function welcomeSectionDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/welcome/welcome.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'Welcome',
      controllerAs: 'vm',
      bindToController: {
        user: '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
