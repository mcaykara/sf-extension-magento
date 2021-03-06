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
    define(['ApiClient', 'model/CustomerDataAttributeMetadataInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerDataAttributeMetadataInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CustomerCustomerMetadataV1Api = factory(root.magento.ApiClient, root.magento.CustomerDataAttributeMetadataInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, CustomerDataAttributeMetadataInterface, ErrorResponse) {
  'use strict';

  /**
   * CustomerCustomerMetadataV1 service.
   * @module api/CustomerCustomerMetadataV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CustomerCustomerMetadataV1Api. 
   * @alias module:api/CustomerCustomerMetadataV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customerCustomerMetadataV1GetAllAttributesMetadataGet operation.
     * @callback module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAllAttributesMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerDataAttributeMetadataInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all attribute metadata.
     * @param {module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAllAttributesMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerDataAttributeMetadataInterface>}
     */
    this.customerCustomerMetadataV1GetAllAttributesMetadataGet = function(callback) {
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
      var returnType = [CustomerDataAttributeMetadataInterface];

      return this.apiClient.callApi(
        '/V1/attributeMetadata/customer', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerMetadataV1GetAttributeMetadataGet operation.
     * @callback module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAttributeMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataAttributeMetadataInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve attribute metadata.
     * @param {String} attributeCode 
     * @param {module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAttributeMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataAttributeMetadataInterface}
     */
    this.customerCustomerMetadataV1GetAttributeMetadataGet = function(attributeCode, callback) {
      var postBody = null;

      // verify the required parameter 'attributeCode' is set
      if (attributeCode === undefined || attributeCode === null) {
        throw new Error("Missing the required parameter 'attributeCode' when calling customerCustomerMetadataV1GetAttributeMetadataGet");
      }


      var pathParams = {
        'attributeCode': attributeCode
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
      var returnType = CustomerDataAttributeMetadataInterface;

      return this.apiClient.callApi(
        '/V1/attributeMetadata/customer/attribute/{attributeCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerMetadataV1GetAttributesGet operation.
     * @callback module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAttributesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerDataAttributeMetadataInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all attributes filtered by form code
     * @param {String} formCode 
     * @param {module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetAttributesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerDataAttributeMetadataInterface>}
     */
    this.customerCustomerMetadataV1GetAttributesGet = function(formCode, callback) {
      var postBody = null;

      // verify the required parameter 'formCode' is set
      if (formCode === undefined || formCode === null) {
        throw new Error("Missing the required parameter 'formCode' when calling customerCustomerMetadataV1GetAttributesGet");
      }


      var pathParams = {
        'formCode': formCode
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
      var returnType = [CustomerDataAttributeMetadataInterface];

      return this.apiClient.callApi(
        '/V1/attributeMetadata/customer/form/{formCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerMetadataV1GetCustomAttributesMetadataGet operation.
     * @callback module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetCustomAttributesMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerDataAttributeMetadataInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom attributes metadata for the given data interface.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataInterfaceName 
     * @param {module:api/CustomerCustomerMetadataV1Api~customerCustomerMetadataV1GetCustomAttributesMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerDataAttributeMetadataInterface>}
     */
    this.customerCustomerMetadataV1GetCustomAttributesMetadataGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'dataInterfaceName': opts['dataInterfaceName'],
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
      var returnType = [CustomerDataAttributeMetadataInterface];

      return this.apiClient.callApi(
        '/V1/attributeMetadata/customer/custom', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
