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
    define(['ApiClient', 'model/Body66', 'model/ErrorResponse', 'model/SalesDataOrderAddressInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body66'), require('../model/ErrorResponse'), require('../model/SalesDataOrderAddressInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesOrderAddressRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body66, root.magento.ErrorResponse, root.magento.SalesDataOrderAddressInterface);
  }
}(this, function(ApiClient, Body66, ErrorResponse, SalesDataOrderAddressInterface) {
  'use strict';

  /**
   * SalesOrderAddressRepositoryV1 service.
   * @module api/SalesOrderAddressRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new SalesOrderAddressRepositoryV1Api. 
   * @alias module:api/SalesOrderAddressRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the salesOrderAddressRepositoryV1SavePut operation.
     * @callback module:api/SalesOrderAddressRepositoryV1Api~salesOrderAddressRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SalesDataOrderAddressInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Performs persist operations for a specified order address.
     * @param {String} parentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body66} opts.body 
     * @param {module:api/SalesOrderAddressRepositoryV1Api~salesOrderAddressRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SalesDataOrderAddressInterface}
     */
    this.salesOrderAddressRepositoryV1SavePut = function(parentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling salesOrderAddressRepositoryV1SavePut");
      }


      var pathParams = {
        'parent_id': parentId
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
      var returnType = SalesDataOrderAddressInterface;

      return this.apiClient.callApi(
        '/V1/orders/{parent_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
