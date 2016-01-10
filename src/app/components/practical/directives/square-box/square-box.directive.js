(function() {

  angular
    .module( 'dhWedding.practical' )
    .directive( 'squareBox', squareBox );

  squareBox.$inject = [ 'resize' ];

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
        scope.setCallback( _.debounce( updateHeight, 200 ) );
        el.addClass( 'square-box' );
      }

      function updateHeight(data) {
        var isMobile = data.width < 768;
        var height   = isMobile ? '' : el[0].getBoundingClientRect().width;

        el.css( 'height', height );
      }
    }
  }

}());
