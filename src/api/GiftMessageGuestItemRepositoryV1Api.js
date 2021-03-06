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
    define(['ApiClient', 'model/Body118', 'model/ErrorResponse', 'model/GiftMessageDataMessageInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body118'), require('../model/ErrorResponse'), require('../model/GiftMessageDataMessageInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.GiftMessageGuestItemRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body118, root.magento.ErrorResponse, root.magento.GiftMessageDataMessageInterface);
  }
}(this, function(ApiClient, Body118, ErrorResponse, GiftMessageDataMessageInterface) {
  'use strict';

  /**
   * GiftMessageGuestItemRepositoryV1 service.
   * @module api/GiftMessageGuestItemRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new GiftMessageGuestItemRepositoryV1Api. 
   * @alias module:api/GiftMessageGuestItemRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the giftMessageGuestItemRepositoryV1GetGet operation.
     * @callback module:api/GiftMessageGuestItemRepositoryV1Api~giftMessageGuestItemRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GiftMessageDataMessageInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the gift message for a specified item in a specified shopping cart.
     * @param {String} cartId The shopping cart ID.
     * @param {Number} itemId The item ID.
     * @param {module:api/GiftMessageGuestItemRepositoryV1Api~giftMessageGuestItemRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GiftMessageDataMessageInterface}
     */
    this.giftMessageGuestItemRepositoryV1GetGet = function(cartId, itemId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling giftMessageGuestItemRepositoryV1GetGet");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling giftMessageGuestItemRepositoryV1GetGet");
      }


      var pathParams = {
        'cartId': cartId,
        'itemId': itemId
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
      var returnType = GiftMessageDataMessageInterface;

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}/gift-message/{itemId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the giftMessageGuestItemRepositoryV1SavePost operation.
     * @callback module:api/GiftMessageGuestItemRepositoryV1Api~giftMessageGuestItemRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the gift message for a specified item in a specified shopping cart.
     * @param {String} cartId The cart ID.
     * @param {Number} itemId The item ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body118} opts.body 
     * @param {module:api/GiftMessageGuestItemRepositoryV1Api~giftMessageGuestItemRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.giftMessageGuestItemRepositoryV1SavePost = function(cartId, itemId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling giftMessageGuestItemRepositoryV1SavePost");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling giftMessageGuestItemRepositoryV1SavePost");
      }


      var pathParams = {
        'cartId': cartId,
        'itemId': itemId
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}/gift-message/{itemId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
