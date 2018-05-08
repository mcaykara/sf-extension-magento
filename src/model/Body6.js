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
    define(['ApiClient', 'model/CustomerDataCustomerInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerDataCustomerInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body6 = factory(root.magento.ApiClient, root.magento.CustomerDataCustomerInterface);
  }
}(this, function(ApiClient, CustomerDataCustomerInterface) {
  'use strict';




  /**
   * The Body6 model module.
   * @module model/Body6
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body6</code>.
   * @alias module:model/Body6
   * @class
   * @param customer {module:model/CustomerDataCustomerInterface} 
   */
  var exports = function(customer) {
    var _this = this;

    _this['customer'] = customer;


  };

  /**
   * Constructs a <code>Body6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body6} obj Optional instance to populate.
   * @return {module:model/Body6} The populated <code>Body6</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer')) {
        obj['customer'] = CustomerDataCustomerInterface.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('redirectUrl')) {
        obj['redirectUrl'] = ApiClient.convertToType(data['redirectUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerDataCustomerInterface} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} redirectUrl
   */
  exports.prototype['redirectUrl'] = undefined;



  return exports;
}));

