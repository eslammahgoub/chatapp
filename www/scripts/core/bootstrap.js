/**
 * Manual bootstrapping chatApp
 */
(function(){
  'use strict';
  var bootstrap;
  bootstrap = function() {
    angular.bootstrap(document, ['chatApp']);
  };
  return angular.element(document).ready(bootstrap);
})();
