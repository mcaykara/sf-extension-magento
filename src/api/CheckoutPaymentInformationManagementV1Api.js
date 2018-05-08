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
    define(['ApiClient', 'model/Body91', 'model/Body92', 'model/CheckoutDataPaymentDetailsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body91'), require('../model/Body92'), require('../model/CheckoutDataPaymentDetailsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CheckoutPaymentInformationManagementV1Api = factory(root.magento.ApiClient, root.magento.Body91, root.magento.Body92, root.magento.CheckoutDataPaymentDetailsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body91, Body92, CheckoutDataPaymentDetailsInterface, ErrorResponse) {
  'use strict';

  /**
   * CheckoutPaymentInformationManagementV1 service.
   * @module api/CheckoutPaymentInformationManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CheckoutPaymentInformationManagementV1Api. 
   * @alias module:api/CheckoutPaymentInformationManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkoutPaymentInformationManagementV1GetPaymentInformationGet operation.
     * @callback module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1GetPaymentInformationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckoutDataPaymentDetailsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get payment information
     * @param {module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1GetPaymentInformationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckoutDataPaymentDetailsInterface}
     */
    this.checkoutPaymentInformationManagementV1GetPaymentInformationGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = CheckoutDataPaymentDetailsInterface;

      return this.apiClient.callApi(
        '/V1/carts/mine/payment-information', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost operation.
     * @callback module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set payment information and place order for a specified cart.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body91} opts.body 
     * @param {module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/V1/carts/mine/payment-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkoutPaymentInformationManagementV1SavePaymentInformationPost operation.
     * @callback module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1SavePaymentInformationPostCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set payment information for a specified cart.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body92} opts.body 
     * @param {module:api/CheckoutPaymentInformationManagementV1Api~checkoutPaymentInformationManagementV1SavePaymentInformationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.checkoutPaymentInformationManagementV1SavePaymentInformationPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/V1/carts/mine/set-payment-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));