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
    define(['ApiClient', 'model/Body88', 'model/ErrorResponse', 'model/QuoteDataTotalsInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body88'), require('../model/ErrorResponse'), require('../model/QuoteDataTotalsInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CheckoutGuestTotalsInformationManagementV1Api = factory(root.magento.ApiClient, root.magento.Body88, root.magento.ErrorResponse, root.magento.QuoteDataTotalsInterface);
  }
}(this, function(ApiClient, Body88, ErrorResponse, QuoteDataTotalsInterface) {
  'use strict';

  /**
   * CheckoutGuestTotalsInformationManagementV1 service.
   * @module api/CheckoutGuestTotalsInformationManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CheckoutGuestTotalsInformationManagementV1Api. 
   * @alias module:api/CheckoutGuestTotalsInformationManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkoutGuestTotalsInformationManagementV1CalculatePost operation.
     * @callback module:api/CheckoutGuestTotalsInformationManagementV1Api~checkoutGuestTotalsInformationManagementV1CalculatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataTotalsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate quote totals based on address and shipping method.
     * @param {String} cartId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body88} opts.body 
     * @param {module:api/CheckoutGuestTotalsInformationManagementV1Api~checkoutGuestTotalsInformationManagementV1CalculatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataTotalsInterface}
     */
    this.checkoutGuestTotalsInformationManagementV1CalculatePost = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling checkoutGuestTotalsInformationManagementV1CalculatePost");
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
      var returnType = QuoteDataTotalsInterface;

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}/totals-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));