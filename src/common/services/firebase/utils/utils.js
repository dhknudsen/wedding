(function() {

  angular
    .module( 'firebase.utils' )
    .factory( 'fbutil', UtilFactory );

  /*
    A simple wrapper on Firebase and
    AngularFire to simplify deps and keep things DRY
  */
  UtilFactory.$inject = ['$window', 'FBURL', '$q'];

  function UtilFactory( $window, FBURL, $q ) {
    'use strict';

    return {
      handler: handler, // convert a node or Firebase style callback to a future
      defer: defer,     // abstract the process of creating a future/promise
      ref: firebaseRef
    };

    ///////

    function handler( fn, context ) {
      return utils.defer(function( def ) {
        fn.call( context, function( err, result ) {
          if ( err !== null ) { def.reject( err ); } else { def.resolve( result ); }
        });
      });
    }

    function defer( fn, context ) {
      var def = $q.defer();
      fn.call( context, def );
      return def.promise;
    }

    /**
     * Example:
     * <code>
     *    function(firebaseRef) {
       *       var ref = firebaseRef('path/to/data');
       *    }
     * </code>
     *
     * @function
     * @name firebaseRef
     * @param {String|Array...} path relative path to the root folder in Firebase instance
     * @return a Firebase instance
     */
    function firebaseRef( path ) {
      var ref = new $window.Firebase( FBURL );
      var args = Array.prototype.slice.call( arguments );
      if ( args.length ) {
        ref = ref.child( pathRef( args ) );
      }
      return ref;
    }

    function pathRef( args ) {
      for ( var i = 0; i < args.length; i++ ) {
        if ( angular.isArray( args[ i ] ) ) {
          args[ i ] = pathRef( args[ i ] );
        } else if ( typeof args[ i ] !== 'string' ) {
          throw new Error( 'Argument ' + i + ' to firebaseRef is not a string: ' + args[ i ] );
        }
      }
      return args.join( '/' );
    }
  }

}());
