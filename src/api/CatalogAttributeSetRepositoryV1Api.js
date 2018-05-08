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
    define(['ApiClient', 'model/Body22', 'model/EavDataAttributeSetInterface', 'model/EavDataAttributeSetSearchResultsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body22'), require('../model/EavDataAttributeSetInterface'), require('../model/EavDataAttributeSetSearchResultsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogAttributeSetRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body22, root.magento.EavDataAttributeSetInterface, root.magento.EavDataAttributeSetSearchResultsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body22, EavDataAttributeSetInterface, EavDataAttributeSetSearchResultsInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogAttributeSetRepositoryV1 service.
   * @module api/CatalogAttributeSetRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogAttributeSetRepositoryV1Api. 
   * @alias module:api/CatalogAttributeSetRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogAttributeSetRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove attribute set by given ID
     * @param {Number} attributeSetId 
     * @param {module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogAttributeSetRepositoryV1DeleteByIdDelete = function(attributeSetId, callback) {
      var postBody = null;

      // verify the required parameter 'attributeSetId' is set
      if (attributeSetId === undefined || attributeSetId === null) {
        throw new Error("Missing the required parameter 'attributeSetId' when calling catalogAttributeSetRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'attributeSetId': attributeSetId
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
        '/V1/products/attribute-sets/{attributeSetId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogAttributeSetRepositoryV1GetGet operation.
     * @callback module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EavDataAttributeSetInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve attribute set information based on given ID
     * @param {Number} attributeSetId 
     * @param {module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EavDataAttributeSetInterface}
     */
    this.catalogAttributeSetRepositoryV1GetGet = function(attributeSetId, callback) {
      var postBody = null;

      // verify the required parameter 'attributeSetId' is set
      if (attributeSetId === undefined || attributeSetId === null) {
        throw new Error("Missing the required parameter 'attributeSetId' when calling catalogAttributeSetRepositoryV1GetGet");
      }


      var pathParams = {
        'attributeSetId': attributeSetId
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
      var returnType = EavDataAttributeSetInterface;

      return this.apiClient.callApi(
        '/V1/products/attribute-sets/{attributeSetId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogAttributeSetRepositoryV1GetListGet operation.
     * @callback module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EavDataAttributeSetSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of Attribute Sets
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EavDataAttributeSetSearchResultsInterface}
     */
    this.catalogAttributeSetRepositoryV1GetListGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchCriteria[filterGroups][][filters][][field]': opts['searchCriteriaFilterGroupsFiltersField'],
        'searchCriteria[filterGroups][][filters][][value]': opts['searchCriteriaFilterGroupsFiltersValue'],
        'searchCriteria[filterGroups][][filters][][conditionType]': opts['searchCriteriaFilterGroupsFiltersConditionType'],
        'searchCriteria[sortOrders][][field]': opts['searchCriteriaSortOrdersField'],
        'searchCriteria[sortOrders][][direction]': opts['searchCriteriaSortOrdersDirection'],
        'searchCriteria[pageSize]': opts['searchCriteriaPageSize'],
        'searchCriteria[currentPage]': opts['searchCriteriaCurrentPage'],
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
      var returnType = EavDataAttributeSetSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/products/attribute-sets/sets/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogAttributeSetRepositoryV1SavePut operation.
     * @callback module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EavDataAttributeSetInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save attribute set data
     * @param {String} attributeSetId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body22} opts.body 
     * @param {module:api/CatalogAttributeSetRepositoryV1Api~catalogAttributeSetRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EavDataAttributeSetInterface}
     */
    this.catalogAttributeSetRepositoryV1SavePut = function(attributeSetId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'attributeSetId' is set
      if (attributeSetId === undefined || attributeSetId === null) {
        throw new Error("Missing the required parameter 'attributeSetId' when calling catalogAttributeSetRepositoryV1SavePut");
      }


      var pathParams = {
        'attributeSetId': attributeSetId
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
      var returnType = EavDataAttributeSetInterface;

      return this.apiClient.callApi(
        '/V1/products/attribute-sets/{attributeSetId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));