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
    define(['ApiClient', 'model/SalesDataShipmentTrackCreationExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataShipmentTrackCreationExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataShipmentTrackCreationInterface = factory(root.magento.ApiClient, root.magento.SalesDataShipmentTrackCreationExtensionInterface);
  }
}(this, function(ApiClient, SalesDataShipmentTrackCreationExtensionInterface) {
  'use strict';




  /**
   * The SalesDataShipmentTrackCreationInterface model module.
   * @module model/SalesDataShipmentTrackCreationInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataShipmentTrackCreationInterface</code>.
   * Shipment Track Creation interface.
   * @alias module:model/SalesDataShipmentTrackCreationInterface
   * @class
   * @param trackNumber {String} Track number.
   * @param title {String} Title.
   * @param carrierCode {String} Carrier code.
   */
  var exports = function(trackNumber, title, carrierCode) {
    var _this = this;


    _this['trackNumber'] = trackNumber;
    _this['title'] = title;
    _this['carrierCode'] = carrierCode;
  };

  /**
   * Constructs a <code>SalesDataShipmentTrackCreationInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataShipmentTrackCreationInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataShipmentTrackCreationInterface} The populated <code>SalesDataShipmentTrackCreationInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataShipmentTrackCreationExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
      if (data.hasOwnProperty('trackNumber')) {
        obj['trackNumber'] = ApiClient.convertToType(data['trackNumber'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('carrierCode')) {
        obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SalesDataShipmentTrackCreationExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;
  /**
   * Track number.
   * @member {String} trackNumber
   */
  exports.prototype['trackNumber'] = undefined;
  /**
   * Title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Carrier code.
   * @member {String} carrierCode
   */
  exports.prototype['carrierCode'] = undefined;



  return exports;
}));


