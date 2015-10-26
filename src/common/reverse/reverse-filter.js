'use strict';

/* Filters */

angular.module('dhWedding')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });