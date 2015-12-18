(function() {

  angular
    .module( 'dhWedding.directives' )
    .directive( 'programmeItem', programmeItem );

  function programmeItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'directives/programme/programme.item.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: ProgrammeItemController,
      controllerAs: 'vm',
      bindToController: {
        time:   '=',
        label:  '=',
        delimiter: '@'
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }

  ProgrammeItemController.$inject = [ '$scope' ];

  function ProgrammeItemController() {

    var vm = this;

    vm.delimiter = vm.delimiter || ':';
    vm.hour      = setTimeProp( 'hour', vm.time, vm.delimiter );
    vm.minutes   = setTimeProp( 'minutes', vm.time, vm.delimiter );
  }

  function setTimeProp( pos, timeString, delimiter ) {
    var position  = pos === 'hour' ? 0 : 1;
    var parts     = timeString.split( delimiter );

    if ( position === 1 && parts.length < 2 ) {
      return '';
    }
    return parts[ position ];
  }

}());
