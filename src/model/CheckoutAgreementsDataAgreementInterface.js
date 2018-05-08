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
    define(['ApiClient', 'model/CheckoutAgreementsDataAgreementExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CheckoutAgreementsDataAgreementExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CheckoutAgreementsDataAgreementInterface = factory(root.magento.ApiClient, root.magento.CheckoutAgreementsDataAgreementExtensionInterface);
  }
}(this, function(ApiClient, CheckoutAgreementsDataAgreementExtensionInterface) {
  'use strict';




  /**
   * The CheckoutAgreementsDataAgreementInterface model module.
   * @module model/CheckoutAgreementsDataAgreementInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CheckoutAgreementsDataAgreementInterface</code>.
   * 
   * @alias module:model/CheckoutAgreementsDataAgreementInterface
   * @class
   * @param agreementId {Number} Agreement ID.
   * @param name {String} Agreement name.
   * @param content {String} Agreement content.
   * @param checkboxText {String} Agreement checkbox text.
   * @param isActive {Boolean} Agreement status.
   * @param isHtml {Boolean} * true - HTML. * false - plain text.
   * @param mode {Number} The agreement applied mode.
   */
  var exports = function(agreementId, name, content, checkboxText, isActive, isHtml, mode) {
    var _this = this;

    _this['agreementId'] = agreementId;
    _this['name'] = name;
    _this['content'] = content;

    _this['checkboxText'] = checkboxText;
    _this['isActive'] = isActive;
    _this['isHtml'] = isHtml;
    _this['mode'] = mode;

  };

  /**
   * Constructs a <code>CheckoutAgreementsDataAgreementInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckoutAgreementsDataAgreementInterface} obj Optional instance to populate.
   * @return {module:model/CheckoutAgreementsDataAgreementInterface} The populated <code>CheckoutAgreementsDataAgreementInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agreementId')) {
        obj['agreementId'] = ApiClient.convertToType(data['agreementId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('contentHeight')) {
        obj['contentHeight'] = ApiClient.convertToType(data['contentHeight'], 'String');
      }
      if (data.hasOwnProperty('checkboxText')) {
        obj['checkboxText'] = ApiClient.convertToType(data['checkboxText'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('isHtml')) {
        obj['isHtml'] = ApiClient.convertToType(data['isHtml'], 'Boolean');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = CheckoutAgreementsDataAgreementExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Agreement ID.
   * @member {Number} agreementId
   */
  exports.prototype['agreementId'] = undefined;
  /**
   * Agreement name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Agreement content.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Agreement content height. Otherwise, null.
   * @member {String} contentHeight
   */
  exports.prototype['contentHeight'] = undefined;
  /**
   * Agreement checkbox text.
   * @member {String} checkboxText
   */
  exports.prototype['checkboxText'] = undefined;
  /**
   * Agreement status.
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * * true - HTML. * false - plain text.
   * @member {Boolean} isHtml
   */
  exports.prototype['isHtml'] = undefined;
  /**
   * The agreement applied mode.
   * @member {Number} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {module:model/CheckoutAgreementsDataAgreementExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

