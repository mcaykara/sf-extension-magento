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
    define(['ApiClient', 'model/RmaDataTrackExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RmaDataTrackExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.RmaDataTrackInterface = factory(root.magento.ApiClient, root.magento.RmaDataTrackExtensionInterface);
  }
}(this, function(ApiClient, RmaDataTrackExtensionInterface) {
  'use strict';




  /**
   * The RmaDataTrackInterface model module.
   * @module model/RmaDataTrackInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>RmaDataTrackInterface</code>.
   * Interface TrackInterface
   * @alias module:model/RmaDataTrackInterface
   * @class
   * @param entityId {Number} Entity id
   * @param rmaEntityId {Number} Rma entity id
   * @param trackNumber {String} Track number
   * @param carrierTitle {String} Carrier title
   * @param carrierCode {String} Carrier code
   */
  var exports = function(entityId, rmaEntityId, trackNumber, carrierTitle, carrierCode) {
    var _this = this;

    _this['entityId'] = entityId;
    _this['rmaEntityId'] = rmaEntityId;
    _this['trackNumber'] = trackNumber;
    _this['carrierTitle'] = carrierTitle;
    _this['carrierCode'] = carrierCode;

  };

  /**
   * Constructs a <code>RmaDataTrackInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RmaDataTrackInterface} obj Optional instance to populate.
   * @return {module:model/RmaDataTrackInterface} The populated <code>RmaDataTrackInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
      }
      if (data.hasOwnProperty('rmaEntityId')) {
        obj['rmaEntityId'] = ApiClient.convertToType(data['rmaEntityId'], 'Number');
      }
      if (data.hasOwnProperty('trackNumber')) {
        obj['trackNumber'] = ApiClient.convertToType(data['trackNumber'], 'String');
      }
      if (data.hasOwnProperty('carrierTitle')) {
        obj['carrierTitle'] = ApiClient.convertToType(data['carrierTitle'], 'String');
      }
      if (data.hasOwnProperty('carrierCode')) {
        obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = RmaDataTrackExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Entity id
   * @member {Number} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * Rma entity id
   * @member {Number} rmaEntityId
   */
  exports.prototype['rmaEntityId'] = undefined;
  /**
   * Track number
   * @member {String} trackNumber
   */
  exports.prototype['trackNumber'] = undefined;
  /**
   * Carrier title
   * @member {String} carrierTitle
   */
  exports.prototype['carrierTitle'] = undefined;
  /**
   * Carrier code
   * @member {String} carrierCode
   */
  exports.prototype['carrierCode'] = undefined;
  /**
   * @member {module:model/RmaDataTrackExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

