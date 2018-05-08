/**
 * Magento Enterprise Edition 2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.magento);
  }
}(this, function(expect, magento) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new magento.QuoteDataTotalsExtensionInterface();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QuoteDataTotalsExtensionInterface', function() {
    it('should create an instance of QuoteDataTotalsExtensionInterface', function() {
      // uncomment below and update the code to test QuoteDataTotalsExtensionInterface
      //var instane = new magento.QuoteDataTotalsExtensionInterface();
      //expect(instance).to.be.a(magento.QuoteDataTotalsExtensionInterface);
    });

    it('should have the property rewardPointsBalance (base name: "rewardPointsBalance")', function() {
      // uncomment below and update the code to test the property rewardPointsBalance
      //var instane = new magento.QuoteDataTotalsExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property rewardCurrencyAmount (base name: "rewardCurrencyAmount")', function() {
      // uncomment below and update the code to test the property rewardCurrencyAmount
      //var instane = new magento.QuoteDataTotalsExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseRewardCurrencyAmount (base name: "baseRewardCurrencyAmount")', function() {
      // uncomment below and update the code to test the property baseRewardCurrencyAmount
      //var instane = new magento.QuoteDataTotalsExtensionInterface();
      //expect(instance).to.be();
    });

  });

}));