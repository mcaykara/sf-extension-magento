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
    define(['ApiClient', 'model/StoreDataGroupExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreDataGroupExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.StoreDataGroupInterface = factory(root.magento.ApiClient, root.magento.StoreDataGroupExtensionInterface);
  }
}(this, function(ApiClient, StoreDataGroupExtensionInterface) {
  'use strict';




  /**
   * The StoreDataGroupInterface model module.
   * @module model/StoreDataGroupInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoreDataGroupInterface</code>.
   * Group interface
   * @alias module:model/StoreDataGroupInterface
   * @class
   * @param id {Number} 
   * @param websiteId {Number} 
   * @param rootCategoryId {Number} 
   * @param defaultStoreId {Number} 
   * @param name {String} 
   */
  var exports = function(id, websiteId, rootCategoryId, defaultStoreId, name) {
    var _this = this;

    _this['id'] = id;
    _this['websiteId'] = websiteId;
    _this['rootCategoryId'] = rootCategoryId;
    _this['defaultStoreId'] = defaultStoreId;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>StoreDataGroupInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreDataGroupInterface} obj Optional instance to populate.
   * @return {module:model/StoreDataGroupInterface} The populated <code>StoreDataGroupInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('websiteId')) {
        obj['websiteId'] = ApiClient.convertToType(data['websiteId'], 'Number');
      }
      if (data.hasOwnProperty('rootCategoryId')) {
        obj['rootCategoryId'] = ApiClient.convertToType(data['rootCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('defaultStoreId')) {
        obj['defaultStoreId'] = ApiClient.convertToType(data['defaultStoreId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = StoreDataGroupExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} websiteId
   */
  exports.prototype['websiteId'] = undefined;
  /**
   * @member {Number} rootCategoryId
   */
  exports.prototype['rootCategoryId'] = undefined;
  /**
   * @member {Number} defaultStoreId
   */
  exports.prototype['defaultStoreId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/StoreDataGroupExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

