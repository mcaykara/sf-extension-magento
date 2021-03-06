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
    instance = new magento.GiftMessageDataMessageInterface();
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

  describe('GiftMessageDataMessageInterface', function() {
    it('should create an instance of GiftMessageDataMessageInterface', function() {
      // uncomment below and update the code to test GiftMessageDataMessageInterface
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be.a(magento.GiftMessageDataMessageInterface);
    });

    it('should have the property giftMessageId (base name: "giftMessageId")', function() {
      // uncomment below and update the code to test the property giftMessageId
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

    it('should have the property recipient (base name: "recipient")', function() {
      // uncomment below and update the code to test the property recipient
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.GiftMessageDataMessageInterface();
      //expect(instance).to.be();
    });

  });

}));
