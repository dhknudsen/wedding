(function(){
  angular
    .module( 'dhWedding.wishlist' )
    .controller( 'Wishlist', Wishlist );

    Wishlist.$inject = [];

    function Wishlist() {
      var vm = this;
    }
})();
