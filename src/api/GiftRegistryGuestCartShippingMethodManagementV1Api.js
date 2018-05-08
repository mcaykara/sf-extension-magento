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
    define(['ApiClient', 'model/Body120', 'model/ErrorResponse', 'model/QuoteDataShippingMethodInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body120'), require('../model/ErrorResponse'), require('../model/QuoteDataShippingMethodInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.GiftRegistryGuestCartShippingMethodManagementV1Api = factory(root.magento.ApiClient, root.magento.Body120, root.magento.ErrorResponse, root.magento.QuoteDataShippingMethodInterface);
  }
}(this, function(ApiClient, Body120, ErrorResponse, QuoteDataShippingMethodInterface) {
  'use strict';

  /**
   * GiftRegistryGuestCartShippingMethodManagementV1 service.
   * @module api/GiftRegistryGuestCartShippingMethodManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new GiftRegistryGuestCartShippingMethodManagementV1Api. 
   * @alias module:api/GiftRegistryGuestCartShippingMethodManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost operation.
     * @callback module:api/GiftRegistryGuestCartShippingMethodManagementV1Api~giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate shipping
     * @param {String} cartId The shopping cart ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body120} opts.body 
     * @param {module:api/GiftRegistryGuestCartShippingMethodManagementV1Api~giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost");
      }


      var pathParams = {
        'cartId': cartId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [QuoteDataShippingMethodInterface];

      return this.apiClient.callApi(
        '/V1/guest-giftregistry/{cartId}/estimate-shipping-methods', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));