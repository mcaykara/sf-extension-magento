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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaxDataOrderTaxDetailsAppliedTaxExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxDataOrderTaxDetailsAppliedTaxExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.TaxDataOrderTaxDetailsAppliedTaxInterface = factory(root.magento.ApiClient, root.magento.TaxDataOrderTaxDetailsAppliedTaxExtensionInterface);
  }
}(this, function(ApiClient, TaxDataOrderTaxDetailsAppliedTaxExtensionInterface) {
  'use strict';




  /**
   * The TaxDataOrderTaxDetailsAppliedTaxInterface model module.
   * @module model/TaxDataOrderTaxDetailsAppliedTaxInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>TaxDataOrderTaxDetailsAppliedTaxInterface</code>.
   * 
   * @alias module:model/TaxDataOrderTaxDetailsAppliedTaxInterface
   * @class
   * @param amount {Number} Tax amount
   * @param baseAmount {Number} Tax amount in base currency
   */
  var exports = function(amount, baseAmount) {
    var _this = this;




    _this['amount'] = amount;
    _this['baseAmount'] = baseAmount;

  };

  /**
   * Constructs a <code>TaxDataOrderTaxDetailsAppliedTaxInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDataOrderTaxDetailsAppliedTaxInterface} obj Optional instance to populate.
   * @return {module:model/TaxDataOrderTaxDetailsAppliedTaxInterface} The populated <code>TaxDataOrderTaxDetailsAppliedTaxInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('percent')) {
        obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('baseAmount')) {
        obj['baseAmount'] = ApiClient.convertToType(data['baseAmount'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = TaxDataOrderTaxDetailsAppliedTaxExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Tax Percent
   * @member {Number} percent
   */
  exports.prototype['percent'] = undefined;
  /**
   * Tax amount
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Tax amount in base currency
   * @member {Number} baseAmount
   */
  exports.prototype['baseAmount'] = undefined;
  /**
   * @member {module:model/TaxDataOrderTaxDetailsAppliedTaxExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

