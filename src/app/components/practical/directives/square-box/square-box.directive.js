(function() {

  angular
    .module( 'dhWedding.practical' )
    .directive( 'squareBox', squareBox );

  function squareBox() {
    var directive = {
      restrict: 'A',
      scope: true,
      link: linkFunc,
      controller: 'SquareBox'
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {

      init();

      //////

      function init() {
        scope.setCallback( _.debounce( updateHeight, 100 ) );
        el.addClass( 'square-box' );
      }

      function updateHeight(data) {
        var isMobile = data.width < 768;
        //var height   = isMobile ? 'auto' : el[0].getBoundingClientRect().width + 'px';

        var height   = el[0].getBoundingClientRect().width + 'px';

        el.css( 'height', height );
      }
    }
  }

}());
