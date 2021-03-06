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
    define(['ApiClient', 'model/EavDataAttributeOptionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EavDataAttributeOptionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body27 = factory(root.magento.ApiClient, root.magento.EavDataAttributeOptionInterface);
  }
}(this, function(ApiClient, EavDataAttributeOptionInterface) {
  'use strict';




  /**
   * The Body27 model module.
   * @module model/Body27
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body27</code>.
   * @alias module:model/Body27
   * @class
   * @param option {module:model/EavDataAttributeOptionInterface} 
   */
  var exports = function(option) {
    var _this = this;

    _this['option'] = option;
  };

  /**
   * Constructs a <code>Body27</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body27} obj Optional instance to populate.
   * @return {module:model/Body27} The populated <code>Body27</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = EavDataAttributeOptionInterface.constructFromObject(data['option']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EavDataAttributeOptionInterface} option
   */
  exports.prototype['option'] = undefined;



  return exports;
}));


