(function(){
  angular
    .module( 'dhWedding.practical' )
    .controller( 'Practical', Practical );

    Practical.$inject = [];

    function Practical() {
      var vm = this;

      // Bindable vars
      vm.mailToAddress = getMailTo();
      vm.user          = vm.user;
      vm.numPeople     = _.get( vm.user, 'people.length' );

      ///////

      function getMailTo() {

        var email   = 'danielplusmathilde@gmail.com';
        var subject = 'Indslag til Mathilde og Daniel\'s bryllup';
        var content = 'Kære Toastmastere.\n\nJeg vil gerne holde følgende indslag til Mathilde og Daniel\'s bryllup:\n\n[Beskrivelse her...]';

        return 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
      }

    }
})();
