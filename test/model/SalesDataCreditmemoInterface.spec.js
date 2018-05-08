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
    instance = new magento.SalesDataCreditmemoInterface();
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

  describe('SalesDataCreditmemoInterface', function() {
    it('should create an instance of SalesDataCreditmemoInterface', function() {
      // uncomment below and update the code to test SalesDataCreditmemoInterface
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be.a(magento.SalesDataCreditmemoInterface);
    });

    it('should have the property adjustment (base name: "adjustment")', function() {
      // uncomment below and update the code to test the property adjustment
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property adjustmentNegative (base name: "adjustmentNegative")', function() {
      // uncomment below and update the code to test the property adjustmentNegative
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property adjustmentPositive (base name: "adjustmentPositive")', function() {
      // uncomment below and update the code to test the property adjustmentPositive
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseAdjustment (base name: "baseAdjustment")', function() {
      // uncomment below and update the code to test the property baseAdjustment
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseAdjustmentNegative (base name: "baseAdjustmentNegative")', function() {
      // uncomment below and update the code to test the property baseAdjustmentNegative
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseAdjustmentPositive (base name: "baseAdjustmentPositive")', function() {
      // uncomment below and update the code to test the property baseAdjustmentPositive
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyCode (base name: "baseCurrencyCode")', function() {
      // uncomment below and update the code to test the property baseCurrencyCode
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseDiscountAmount (base name: "baseDiscountAmount")', function() {
      // uncomment below and update the code to test the property baseDiscountAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseGrandTotal (base name: "baseGrandTotal")', function() {
      // uncomment below and update the code to test the property baseGrandTotal
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseDiscountTaxCompensationAmount (base name: "baseDiscountTaxCompensationAmount")', function() {
      // uncomment below and update the code to test the property baseDiscountTaxCompensationAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingAmount (base name: "baseShippingAmount")', function() {
      // uncomment below and update the code to test the property baseShippingAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingDiscountTaxCompensationAmnt (base name: "baseShippingDiscountTaxCompensationAmnt")', function() {
      // uncomment below and update the code to test the property baseShippingDiscountTaxCompensationAmnt
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingInclTax (base name: "baseShippingInclTax")', function() {
      // uncomment below and update the code to test the property baseShippingInclTax
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingTaxAmount (base name: "baseShippingTaxAmount")', function() {
      // uncomment below and update the code to test the property baseShippingTaxAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseSubtotal (base name: "baseSubtotal")', function() {
      // uncomment below and update the code to test the property baseSubtotal
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseSubtotalInclTax (base name: "baseSubtotalInclTax")', function() {
      // uncomment below and update the code to test the property baseSubtotalInclTax
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseTaxAmount (base name: "baseTaxAmount")', function() {
      // uncomment below and update the code to test the property baseTaxAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseToGlobalRate (base name: "baseToGlobalRate")', function() {
      // uncomment below and update the code to test the property baseToGlobalRate
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseToOrderRate (base name: "baseToOrderRate")', function() {
      // uncomment below and update the code to test the property baseToOrderRate
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property billingAddressId (base name: "billingAddressId")', function() {
      // uncomment below and update the code to test the property billingAddressId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property creditmemoStatus (base name: "creditmemoStatus")', function() {
      // uncomment below and update the code to test the property creditmemoStatus
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property discountDescription (base name: "discountDescription")', function() {
      // uncomment below and update the code to test the property discountDescription
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property emailSent (base name: "emailSent")', function() {
      // uncomment below and update the code to test the property emailSent
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property globalCurrencyCode (base name: "globalCurrencyCode")', function() {
      // uncomment below and update the code to test the property globalCurrencyCode
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property grandTotal (base name: "grandTotal")', function() {
      // uncomment below and update the code to test the property grandTotal
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property discountTaxCompensationAmount (base name: "discountTaxCompensationAmount")', function() {
      // uncomment below and update the code to test the property discountTaxCompensationAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property incrementId (base name: "incrementId")', function() {
      // uncomment below and update the code to test the property incrementId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoiceId")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property orderCurrencyCode (base name: "orderCurrencyCode")', function() {
      // uncomment below and update the code to test the property orderCurrencyCode
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddressId (base name: "shippingAddressId")', function() {
      // uncomment below and update the code to test the property shippingAddressId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingAmount (base name: "shippingAmount")', function() {
      // uncomment below and update the code to test the property shippingAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingDiscountTaxCompensationAmount (base name: "shippingDiscountTaxCompensationAmount")', function() {
      // uncomment below and update the code to test the property shippingDiscountTaxCompensationAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingInclTax (base name: "shippingInclTax")', function() {
      // uncomment below and update the code to test the property shippingInclTax
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingTaxAmount (base name: "shippingTaxAmount")', function() {
      // uncomment below and update the code to test the property shippingTaxAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property storeCurrencyCode (base name: "storeCurrencyCode")', function() {
      // uncomment below and update the code to test the property storeCurrencyCode
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property storeToBaseRate (base name: "storeToBaseRate")', function() {
      // uncomment below and update the code to test the property storeToBaseRate
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property storeToOrderRate (base name: "storeToOrderRate")', function() {
      // uncomment below and update the code to test the property storeToOrderRate
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property subtotal (base name: "subtotal")', function() {
      // uncomment below and update the code to test the property subtotal
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property subtotalInclTax (base name: "subtotalInclTax")', function() {
      // uncomment below and update the code to test the property subtotalInclTax
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.SalesDataCreditmemoInterface();
      //expect(instance).to.be();
    });

  });

}));