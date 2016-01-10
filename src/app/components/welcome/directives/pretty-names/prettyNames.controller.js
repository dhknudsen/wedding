(function() {
  angular
    .module( 'dhWedding.welcome' )
    .controller( 'PrettyNames', PrettyNames );

  PrettyNames.$inject = [ '$scope' ];

  function PrettyNames( $scope ) {
    var vm = this;

    // Bindable vars
    vm.name = vm.name || 'Gæst';
    vm.parts = [];

    //Event handling
    $scope.$watch( 'vm.name', formatPrettyNames );

    ////////

    function formatPrettyNames( namesString ) {
      var splitter = getSplitter( namesString );
      var parts    = [];

      if ( splitter ) {
        parts = namesString.split( splitter ).map(function( item, index ) {
          return {
            class: index === 1 ? 'pretty-names__left' : 'pretty-names__right',
            text: item.trim()
          };
        });
        parts.splice( 1, 0, getAmbersand() );

      } else {
        parts.push({
          class: 'pretty-names__single',
          text: namesString
        });
      }
      vm.parts = parts;
    }

    function getSplitter( string ) {
      var splitter = '';
      [ ' og ', '&' ].forEach(function( item ) {
        splitter = string.includes( item )  ? item : splitter;
      });
      return splitter;
    }

    function getAmbersand() {
      return {
        class: 'pretty-names__ambersand',
        text: '&'
      };
    }
  }
})();
