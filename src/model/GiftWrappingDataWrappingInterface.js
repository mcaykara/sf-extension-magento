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
    define(['ApiClient', 'model/GiftWrappingDataWrappingExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GiftWrappingDataWrappingExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.GiftWrappingDataWrappingInterface = factory(root.magento.ApiClient, root.magento.GiftWrappingDataWrappingExtensionInterface);
  }
}(this, function(ApiClient, GiftWrappingDataWrappingExtensionInterface) {
  'use strict';




  /**
   * The GiftWrappingDataWrappingInterface model module.
   * @module model/GiftWrappingDataWrappingInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>GiftWrappingDataWrappingInterface</code>.
   * 
   * @alias module:model/GiftWrappingDataWrappingInterface
   * @class
   * @param design {String} 
   * @param status {Number} 
   * @param basePrice {Number} 
   */
  var exports = function(design, status, basePrice) {
    var _this = this;


    _this['design'] = design;
    _this['status'] = status;
    _this['basePrice'] = basePrice;






  };

  /**
   * Constructs a <code>GiftWrappingDataWrappingInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GiftWrappingDataWrappingInterface} obj Optional instance to populate.
   * @return {module:model/GiftWrappingDataWrappingInterface} The populated <code>GiftWrappingDataWrappingInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wrappingId')) {
        obj['wrappingId'] = ApiClient.convertToType(data['wrappingId'], 'Number');
      }
      if (data.hasOwnProperty('design')) {
        obj['design'] = ApiClient.convertToType(data['design'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('basePrice')) {
        obj['basePrice'] = ApiClient.convertToType(data['basePrice'], 'Number');
      }
      if (data.hasOwnProperty('imageName')) {
        obj['imageName'] = ApiClient.convertToType(data['imageName'], 'String');
      }
      if (data.hasOwnProperty('imageBase64Content')) {
        obj['imageBase64Content'] = ApiClient.convertToType(data['imageBase64Content'], 'String');
      }
      if (data.hasOwnProperty('baseCurrencyCode')) {
        obj['baseCurrencyCode'] = ApiClient.convertToType(data['baseCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('websiteIds')) {
        obj['websiteIds'] = ApiClient.convertToType(data['websiteIds'], ['Number']);
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = GiftWrappingDataWrappingExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} wrappingId
   */
  exports.prototype['wrappingId'] = undefined;
  /**
   * @member {String} design
   */
  exports.prototype['design'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} basePrice
   */
  exports.prototype['basePrice'] = undefined;
  /**
   * @member {String} imageName
   */
  exports.prototype['imageName'] = undefined;
  /**
   * @member {String} imageBase64Content
   */
  exports.prototype['imageBase64Content'] = undefined;
  /**
   * @member {String} baseCurrencyCode
   */
  exports.prototype['baseCurrencyCode'] = undefined;
  /**
   * @member {Array.<Number>} websiteIds
   */
  exports.prototype['websiteIds'] = undefined;
  /**
   * Wrapping image URL.
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * @member {module:model/GiftWrappingDataWrappingExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


