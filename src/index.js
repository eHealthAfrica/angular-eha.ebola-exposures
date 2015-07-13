;(function() {

  var ngModule = angular.module('angular-eha.ebola-exposures', [
    'angular-eha.ebola-exposures.service'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
