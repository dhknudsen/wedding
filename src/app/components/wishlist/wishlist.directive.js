(function() {
  angular
    .module( 'dhWedding.wishlist' )
    .directive( 'wishlistSection', wishlistSectionDirective );

  function wishlistSectionDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/wishlist/wishlist.tpl.html',
      scope: {},
      link: linkFunc,
      replace: true,
      controller: 'Wishlist',
      controllerAs: 'vm',
      bindToController: {
        //...//
      }
    };

    return directive;

    function linkFunc( scope, el, attr, ctrl ) {}
  }
})();
