(function(){
  angular
    .module( 'dhWedding.layout', [
      'dhWedding.core',
      'dhWedding.security',
      'dhWedding.navigation',
      'dhWedding.stickyHeader',

      'placeholders',
      'angular-flexslider',
      'angular-parallax',
      'toastr',
      'zumba.angular-waypoints',
      'ngResize'

    ]);
})();
