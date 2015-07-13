/*jshint expr: true*/
describe('angular-eha.ebola-exposures.service', function() {
  'use strict';

  var service;

  beforeEach(module('angular-eha.ebola-exposures.service'));
  beforeEach(inject(function(_angularEhaEbolaExposuresService_) {
    service = _angularEhaEbolaExposuresService_;
  }));

  describe('Public API', function() {
    it('should expose a method', function() {
      expect(service.byCountryCode).to.be.defined;
    });
    describe('exposures for Sierra Leone', function() {
      var exp;
      beforeEach(function() {
        exp = service.byCountryCode('sl');
      });
      it('are 7', function() {
        expect(exp.length).to.equal(7);
      });
    });
    describe('exposures for Liberia', function() {
      var exp;
      beforeEach(function() {
        exp = service.byCountryCode('lr');
      });
      it('are 5', function() {
        expect(exp.length).to.equal(5);
      });
    });
    describe('default exposures', function() {
      var exp;
      beforeEach(function() {
        exp = service.byCountryCode('whatever');
      });
      it('are 5', function() {
        expect(exp.length).to.equal(5);
      });
    });
  });

});
