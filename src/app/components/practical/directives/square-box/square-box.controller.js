(function() {

  angular
    .module( 'dhWedding.practical' )
    .controller( 'SquareBox', SquareBox );

  SquareBox.$inject = [ '$scope', 'resize'];

  function SquareBox($scope, resize) {
    var callback = function() {};

    // Bindable functions
    $scope.setCallback = setCallback;

    // Event handling
    $scope.$on( 'resize', updateHeight );

    init();

    ///////

    function init(){
      resize.trigger();
    }

    function updateHeight($event, data){
      callback(data);
    }

    function setCallback(cb){
      callback = cb;
    }
  }

}());
