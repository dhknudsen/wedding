(function() {
  angular
    .module( 'dhWedding.home' )
    .factory( 'Programme', Programme );

  Programme.$inject = [ '$q' ];

  function Programme( $q ) {
    var deferred = $q.defer();

    deferred.resolve( data() );

    return deferred.promise;
  }

  function data() {
    return [
      {
        'time': '12:30',
        'label': 'Gommen og gæster ankommer til kirken'
      },
      {
        'time': '12:45',
        'label': 'Bruden og brudens far ankommer til kirken '
      },
      {
        'time': '13:00',
        'label': 'Vielsen'
      },
      {
        'time': '13:30',
        'label': 'Fotografering af brudepar i/ved kirken med nærmeste familie'
      },
      {
        'time': '14:00',
        'label': 'Brudeparret forlader kirken '
      },
      {
        'time': '14:15',
        'label': 'Gæsterne er ankommet til reception på Varna Palæet '
      },
      {
        'time': '15:00',
        'label': 'Brudparret ankommer til Varna Palæet '
      },
      {
        'time': '16:30',
        'label': 'Bryllupskagen skæres for '
      },
      {
        'time': '17:30',
        'label': 'Der opstilles til store gruppebillede på havetrappen '
      },
      {
        'time': '18:00',
        'label': 'Middag '
      },
      {
        'time': '23:30',
        'label': 'Kaffe og klargøring til Brudevals '
      },
      {
        'time': '23:45',
        'label': 'Brudevals '
      },
      {
        'time': '00:10',
        'label': 'En lille overraskelse'
      },
      {
        'time': '00:15',
        'label': 'DANS, DANS, DANS!'
      }
    ];
  }

})();
