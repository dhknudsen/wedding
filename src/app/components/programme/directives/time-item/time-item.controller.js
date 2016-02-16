(function() {

  angular
    .module( 'dhWedding.programme' )
    .controller( 'TimeItem', TimeItem );

  function TimeItem() {
    var vm = this;
    var timeunits = getTimeUnits( vm.time );

    vm.fromHour    = _.get(timeunits, 'from.hour');
    vm.fromMinutes = _.get(timeunits, 'from.minutes');
    vm.toHour      = _.get(timeunits, 'to.hour');
    vm.toMinutes   = _.get(timeunits, 'to.minutes');


    ///// ///

    function getTimeUnits( timeString ) {
      return timeString.split( '-' ).reduce( buildUnitsObj, {});

      function buildUnitsObj( obj, item, index ) {
        var key = index === 0 ? 'from' : 'to';
        var parts = item.split( ':' );

        obj[ key ] = {
          hour: parts[ 0 ],
          minutes: parts[ 1 ]
        };

        return obj;
      }
    }
  }



}());
