(function() {

  angular
    .module( 'dhWedding.programme' )
    .directive( 'timeItem', timeItem );

  function timeItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/programme/directives/time-item/time-item.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'TimeItem',
      controllerAs: 'vm',
      bindToController: {
        time:   '=',
        label:  '='
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }

}());
