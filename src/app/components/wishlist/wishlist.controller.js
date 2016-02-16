(function(){
  angular
    .module( 'dhWedding.wishlist' )
    .controller( 'Wishlist', Wishlist );

    Wishlist.$inject = ['wishlistService'];

    function Wishlist(wishlistService) {
      var vm = this;


      vm.user     = vm.user || {};
      vm.mailTo   = getMailTo();
      vm.wishlist = wishlistService.data;

      ////////

      function getMailTo() {
        var name     = _.get(vm, 'user.profile.name');
        var email    = 'annelouiselthomsen@hotmail.com';
        var subject  = 'Ang. gavekøb til Mathilde og Daniel\'s bryllup';
        var content  = 'Kære Anne Louise, aka. gavefé :).';
            content += '\n\nVi har tænkt os at købe følgende gave til Mathilde og Daniel\'s bryllup,';
            content += ' og vil høre om den er ledig:\n\n[Dit ønskede gavekøb her...]\n\n';
            content += 'Dbh. ' + name;

        return 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
      }
    }
})();
