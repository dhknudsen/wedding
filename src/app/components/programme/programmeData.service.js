(function() {
  angular
    .module( 'dhWedding.programme' )
    .factory( 'ProgrammeData', ProgrammeData );

  ProgrammeData.$inject = [ '$q' ];

  function ProgrammeData( $q ) {
    var deferred = $q.defer();

    deferred.resolve( data() );

    return deferred.promise;
  }

  function data() {
    return [
      {
        'time': '12:30 - 12:45',
        'label': 'Gommen og gæster ankommer til kirken'
      },
      {
        'time': '12:45 - 13:00',
        'label': 'Bruden og brudens far ankommer til kirken '
      },
      {
        'time': '13:00 - 13:30',
        'label': 'Vielsen'
      },
      {
        'time': '14:00 - 14:15',
        'label': 'Gæsterne er ankommet til reception på Varna Palæet '
      },
      {
        'time': '14:00 - 18:00 ',
        'label': 'Reception med musik'
      },
      {
        'time': '18:00 - 23:30',
        'label': 'Middag '
      },
      {
        'time': '23:45 - 23:59',
        'label': 'Brudevals '
      },
      {
        'time': '00:00 - 03:00',
        'label': 'Lad der være fest!'
      }
    ];
  }

})();
