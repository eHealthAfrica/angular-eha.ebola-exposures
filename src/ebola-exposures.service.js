;(function() {
  'use strict';
  /**
   * @ngdoc service
   * @function
   * @name angularEhaEbolaExposuresService
   * @module angular-eha.ebola-exposures
   */
  var ngModule = angular
                  .module('angular-eha.ebola-exposures.service', []);

  ngModule.service('angularEhaEbolaExposuresService', function() {
    var def = [
      'touch-fluids',
      'physical-contact',
      'objects',
      'slept-ate',
      'other'
    ];
    var additional = {
      sl: [
        'breastfeeding',
        'funeral'
      ]
    };
    this.byCountryCode = function(code) {
      if (code in additional) {
        return def.concat(additional[code]);
      } else {
        return def;
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
