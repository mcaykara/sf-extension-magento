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
    define(['ApiClient', 'model/GiftMessageDataMessageInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GiftMessageDataMessageInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body114 = factory(root.magento.ApiClient, root.magento.GiftMessageDataMessageInterface);
  }
}(this, function(ApiClient, GiftMessageDataMessageInterface) {
  'use strict';




  /**
   * The Body114 model module.
   * @module model/Body114
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body114</code>.
   * @alias module:model/Body114
   * @class
   * @param giftMessage {module:model/GiftMessageDataMessageInterface} 
   */
  var exports = function(giftMessage) {
    var _this = this;

    _this['giftMessage'] = giftMessage;
  };

  /**
   * Constructs a <code>Body114</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body114} obj Optional instance to populate.
   * @return {module:model/Body114} The populated <code>Body114</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('giftMessage')) {
        obj['giftMessage'] = GiftMessageDataMessageInterface.constructFromObject(data['giftMessage']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GiftMessageDataMessageInterface} giftMessage
   */
  exports.prototype['giftMessage'] = undefined;



  return exports;
}));

