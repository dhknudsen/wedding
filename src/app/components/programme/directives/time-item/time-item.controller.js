(function() {

  angular
    .module( 'dhWedding.programme' )
    .controller( 'TimeItem', TimeItem );

  TimeItem.$inject = [ '$scope' ];

  function TimeItem() {

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
