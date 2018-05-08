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
    define(['ApiClient', 'model/CustomerDataAttributeMetadataInterface', 'model/ErrorResponse', 'model/FrameworkMetadataObjectInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerDataAttributeMetadataInterface'), require('../model/ErrorResponse'), require('../model/FrameworkMetadataObjectInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.RmaRmaAttributesManagementV1Api = factory(root.magento.ApiClient, root.magento.CustomerDataAttributeMetadataInterface, root.magento.ErrorResponse, root.magento.FrameworkMetadataObjectInterface);
  }
}(this, function(ApiClient, CustomerDataAttributeMetadataInterface, ErrorResponse, FrameworkMetadataObjectInterface) {
  'use strict';

  /**
   * RmaRmaAttributesManagementV1 service.
   * @module api/RmaRmaAttributesManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new RmaRmaAttributesManagementV1Api. 
   * @alias module:api/RmaRmaAttributesManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rmaRmaAttributesManagementV1GetAllAttributesMetadataGet operation.
     * @callback module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAllAttributesMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerDataAttributeMetadataInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all attribute metadata.
     * @param {module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAllAttributesMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerDataAttributeMetadataInterface>}
     */
    this.rmaRmaAttributesManagementV1GetAllAttributesMetadataGet = function(callback) {
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
        '/V1/returnsAttributeMetadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaRmaAttributesManagementV1GetAttributeMetadataGet operation.
     * @callback module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAttributeMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataAttributeMetadataInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve attribute metadata.
     * @param {String} attributeCode 
     * @param {module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAttributeMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataAttributeMetadataInterface}
     */
    this.rmaRmaAttributesManagementV1GetAttributeMetadataGet = function(attributeCode, callback) {
      var postBody = null;

      // verify the required parameter 'attributeCode' is set
      if (attributeCode === undefined || attributeCode === null) {
        throw new Error("Missing the required parameter 'attributeCode' when calling rmaRmaAttributesManagementV1GetAttributeMetadataGet");
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
        '/V1/returnsAttributeMetadata/{attributeCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaRmaAttributesManagementV1GetAttributesGet operation.
     * @callback module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAttributesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerDataAttributeMetadataInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all attributes filtered by form code
     * @param {String} formCode 
     * @param {module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetAttributesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerDataAttributeMetadataInterface>}
     */
    this.rmaRmaAttributesManagementV1GetAttributesGet = function(formCode, callback) {
      var postBody = null;

      // verify the required parameter 'formCode' is set
      if (formCode === undefined || formCode === null) {
        throw new Error("Missing the required parameter 'formCode' when calling rmaRmaAttributesManagementV1GetAttributesGet");
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
        '/V1/returnsAttributeMetadata/form/{formCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet operation.
     * @callback module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetCustomAttributesMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FrameworkMetadataObjectInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom attribute metadata for the given Data object&#39;s attribute set
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataObjectClassName Data object class name
     * @param {module:api/RmaRmaAttributesManagementV1Api~rmaRmaAttributesManagementV1GetCustomAttributesMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FrameworkMetadataObjectInterface>}
     */
    this.rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'dataObjectClassName': opts['dataObjectClassName'],
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
      var returnType = [FrameworkMetadataObjectInterface];

      return this.apiClient.callApi(
        '/V1/returnsAttributeMetadata/custom', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));