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
    define(['ApiClient', 'model/ErrorParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.ErrorErrorsItem = factory(root.magento.ApiClient, root.magento.ErrorParameters);
  }
}(this, function(ApiClient, ErrorParameters) {
  'use strict';




  /**
   * The ErrorErrorsItem model module.
   * @module model/ErrorErrorsItem
   * @version 2.0
   */

  /**
   * Constructs a new <code>ErrorErrorsItem</code>.
   * Error details
   * @alias module:model/ErrorErrorsItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ErrorErrorsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorErrorsItem} obj Optional instance to populate.
   * @return {module:model/ErrorErrorsItem} The populated <code>ErrorErrorsItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ErrorParameters.constructFromObject(data['parameters']);
      }
    }
    return obj;
  }

  /**
   * Error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/ErrorParameters} parameters
   */
  exports.prototype['parameters'] = undefined;



  return exports;
}));


