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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body7 = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body7 model module.
   * @module model/Body7
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body7</code>.
   * @alias module:model/Body7
   * @class
   * @param confirmationKey {String} 
   */
  var exports = function(confirmationKey) {
    var _this = this;

    _this['confirmationKey'] = confirmationKey;
  };

  /**
   * Constructs a <code>Body7</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body7} obj Optional instance to populate.
   * @return {module:model/Body7} The populated <code>Body7</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('confirmationKey')) {
        obj['confirmationKey'] = ApiClient.convertToType(data['confirmationKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} confirmationKey
   */
  exports.prototype['confirmationKey'] = undefined;



  return exports;
}));

