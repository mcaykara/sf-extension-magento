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
    define(['ApiClient', 'model/DownloadableDataFileContentInterface', 'model/DownloadableDataLinkExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DownloadableDataFileContentInterface'), require('./DownloadableDataLinkExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.DownloadableDataLinkInterface = factory(root.magento.ApiClient, root.magento.DownloadableDataFileContentInterface, root.magento.DownloadableDataLinkExtensionInterface);
  }
}(this, function(ApiClient, DownloadableDataFileContentInterface, DownloadableDataLinkExtensionInterface) {
  'use strict';




  /**
   * The DownloadableDataLinkInterface model module.
   * @module model/DownloadableDataLinkInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>DownloadableDataLinkInterface</code>.
   * 
   * @alias module:model/DownloadableDataLinkInterface
   * @class
   * @param sortOrder {Number} 
   * @param isShareable {Number} Shareable status
   * @param price {Number} Price
   * @param linkType {String} 
   * @param sampleType {String} 
   */
  var exports = function(sortOrder, isShareable, price, linkType, sampleType) {
    var _this = this;



    _this['sortOrder'] = sortOrder;
    _this['isShareable'] = isShareable;
    _this['price'] = price;

    _this['linkType'] = linkType;



    _this['sampleType'] = sampleType;




  };

  /**
   * Constructs a <code>DownloadableDataLinkInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadableDataLinkInterface} obj Optional instance to populate.
   * @return {module:model/DownloadableDataLinkInterface} The populated <code>DownloadableDataLinkInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('sortOrder')) {
        obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
      }
      if (data.hasOwnProperty('isShareable')) {
        obj['isShareable'] = ApiClient.convertToType(data['isShareable'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('numberOfDownloads')) {
        obj['numberOfDownloads'] = ApiClient.convertToType(data['numberOfDownloads'], 'Number');
      }
      if (data.hasOwnProperty('linkType')) {
        obj['linkType'] = ApiClient.convertToType(data['linkType'], 'String');
      }
      if (data.hasOwnProperty('linkFile')) {
        obj['linkFile'] = ApiClient.convertToType(data['linkFile'], 'String');
      }
      if (data.hasOwnProperty('linkFileContent')) {
        obj['linkFileContent'] = DownloadableDataFileContentInterface.constructFromObject(data['linkFileContent']);
      }
      if (data.hasOwnProperty('linkUrl')) {
        obj['linkUrl'] = ApiClient.convertToType(data['linkUrl'], 'String');
      }
      if (data.hasOwnProperty('sampleType')) {
        obj['sampleType'] = ApiClient.convertToType(data['sampleType'], 'String');
      }
      if (data.hasOwnProperty('sampleFile')) {
        obj['sampleFile'] = ApiClient.convertToType(data['sampleFile'], 'String');
      }
      if (data.hasOwnProperty('sampleFileContent')) {
        obj['sampleFileContent'] = DownloadableDataFileContentInterface.constructFromObject(data['sampleFileContent']);
      }
      if (data.hasOwnProperty('sampleUrl')) {
        obj['sampleUrl'] = ApiClient.convertToType(data['sampleUrl'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = DownloadableDataLinkExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Sample(or link) id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Number} sortOrder
   */
  exports.prototype['sortOrder'] = undefined;
  /**
   * Shareable status
   * @member {Number} isShareable
   */
  exports.prototype['isShareable'] = undefined;
  /**
   * Price
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Of downloads per user
   * @member {Number} numberOfDownloads
   */
  exports.prototype['numberOfDownloads'] = undefined;
  /**
   * @member {String} linkType
   */
  exports.prototype['linkType'] = undefined;
  /**
   * relative file path
   * @member {String} linkFile
   */
  exports.prototype['linkFile'] = undefined;
  /**
   * @member {module:model/DownloadableDataFileContentInterface} linkFileContent
   */
  exports.prototype['linkFileContent'] = undefined;
  /**
   * Link url or null when type is 'file'
   * @member {String} linkUrl
   */
  exports.prototype['linkUrl'] = undefined;
  /**
   * @member {String} sampleType
   */
  exports.prototype['sampleType'] = undefined;
  /**
   * relative file path
   * @member {String} sampleFile
   */
  exports.prototype['sampleFile'] = undefined;
  /**
   * @member {module:model/DownloadableDataFileContentInterface} sampleFileContent
   */
  exports.prototype['sampleFileContent'] = undefined;
  /**
   * file URL
   * @member {String} sampleUrl
   */
  exports.prototype['sampleUrl'] = undefined;
  /**
   * @member {module:model/DownloadableDataLinkExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

