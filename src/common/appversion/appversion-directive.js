'use strict';

/* Directives */


angular.module('dhWedding')

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }]);
