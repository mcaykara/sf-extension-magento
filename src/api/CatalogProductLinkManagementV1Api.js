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
    define(['ApiClient', 'model/Body36', 'model/CatalogDataProductLinkInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body36'), require('../model/CatalogDataProductLinkInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogProductLinkManagementV1Api = factory(root.magento.ApiClient, root.magento.Body36, root.magento.CatalogDataProductLinkInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body36, CatalogDataProductLinkInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogProductLinkManagementV1 service.
   * @module api/CatalogProductLinkManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogProductLinkManagementV1Api. 
   * @alias module:api/CatalogProductLinkManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogProductLinkManagementV1GetLinkedItemsByTypeGet operation.
     * @callback module:api/CatalogProductLinkManagementV1Api~catalogProductLinkManagementV1GetLinkedItemsByTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductLinkInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provide the list of links for a specific product
     * @param {String} sku 
     * @param {String} type 
     * @param {module:api/CatalogProductLinkManagementV1Api~catalogProductLinkManagementV1GetLinkedItemsByTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductLinkInterface>}
     */
    this.catalogProductLinkManagementV1GetLinkedItemsByTypeGet = function(sku, type, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductLinkManagementV1GetLinkedItemsByTypeGet");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling catalogProductLinkManagementV1GetLinkedItemsByTypeGet");
      }


      var pathParams = {
        'sku': sku,
        'type': type
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
      var returnType = [CatalogDataProductLinkInterface];

      return this.apiClient.callApi(
        '/V1/products/{sku}/links/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductLinkManagementV1SetProductLinksPost operation.
     * @callback module:api/CatalogProductLinkManagementV1Api~catalogProductLinkManagementV1SetProductLinksPostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a product link to another product
     * @param {String} sku 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body36} opts.body 
     * @param {module:api/CatalogProductLinkManagementV1Api~catalogProductLinkManagementV1SetProductLinksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductLinkManagementV1SetProductLinksPost = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductLinkManagementV1SetProductLinksPost");
      }


      var pathParams = {
        'sku': sku
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
        '/V1/products/{sku}/links', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
