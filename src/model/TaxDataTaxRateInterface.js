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
    define(['ApiClient', 'model/TaxDataTaxRateExtensionInterface', 'model/TaxDataTaxRateTitleInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxDataTaxRateExtensionInterface'), require('./TaxDataTaxRateTitleInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.TaxDataTaxRateInterface = factory(root.magento.ApiClient, root.magento.TaxDataTaxRateExtensionInterface, root.magento.TaxDataTaxRateTitleInterface);
  }
}(this, function(ApiClient, TaxDataTaxRateExtensionInterface, TaxDataTaxRateTitleInterface) {
  'use strict';




  /**
   * The TaxDataTaxRateInterface model module.
   * @module model/TaxDataTaxRateInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>TaxDataTaxRateInterface</code>.
   * Tax rate interface.
   * @alias module:model/TaxDataTaxRateInterface
   * @class
   * @param taxCountryId {String} Country id
   * @param rate {Number} Tax rate in percentage
   * @param code {String} Tax rate code
   */
  var exports = function(taxCountryId, rate, code) {
    var _this = this;


    _this['taxCountryId'] = taxCountryId;






    _this['rate'] = rate;
    _this['code'] = code;


  };

  /**
   * Constructs a <code>TaxDataTaxRateInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDataTaxRateInterface} obj Optional instance to populate.
   * @return {module:model/TaxDataTaxRateInterface} The populated <code>TaxDataTaxRateInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('taxCountryId')) {
        obj['taxCountryId'] = ApiClient.convertToType(data['taxCountryId'], 'String');
      }
      if (data.hasOwnProperty('taxRegionId')) {
        obj['taxRegionId'] = ApiClient.convertToType(data['taxRegionId'], 'Number');
      }
      if (data.hasOwnProperty('regionName')) {
        obj['regionName'] = ApiClient.convertToType(data['regionName'], 'String');
      }
      if (data.hasOwnProperty('taxPostcode')) {
        obj['taxPostcode'] = ApiClient.convertToType(data['taxPostcode'], 'String');
      }
      if (data.hasOwnProperty('zipIsRange')) {
        obj['zipIsRange'] = ApiClient.convertToType(data['zipIsRange'], 'Number');
      }
      if (data.hasOwnProperty('zipFrom')) {
        obj['zipFrom'] = ApiClient.convertToType(data['zipFrom'], 'Number');
      }
      if (data.hasOwnProperty('zipTo')) {
        obj['zipTo'] = ApiClient.convertToType(data['zipTo'], 'Number');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('titles')) {
        obj['titles'] = ApiClient.convertToType(data['titles'], [TaxDataTaxRateTitleInterface]);
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = TaxDataTaxRateExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Country id
   * @member {String} taxCountryId
   */
  exports.prototype['taxCountryId'] = undefined;
  /**
   * Region id
   * @member {Number} taxRegionId
   */
  exports.prototype['taxRegionId'] = undefined;
  /**
   * Region name
   * @member {String} regionName
   */
  exports.prototype['regionName'] = undefined;
  /**
   * Postcode
   * @member {String} taxPostcode
   */
  exports.prototype['taxPostcode'] = undefined;
  /**
   * Zip is range
   * @member {Number} zipIsRange
   */
  exports.prototype['zipIsRange'] = undefined;
  /**
   * Zip range from
   * @member {Number} zipFrom
   */
  exports.prototype['zipFrom'] = undefined;
  /**
   * Zip range to
   * @member {Number} zipTo
   */
  exports.prototype['zipTo'] = undefined;
  /**
   * Tax rate in percentage
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * Tax rate code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Tax rate titles
   * @member {Array.<module:model/TaxDataTaxRateTitleInterface>} titles
   */
  exports.prototype['titles'] = undefined;
  /**
   * @member {module:model/TaxDataTaxRateExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

