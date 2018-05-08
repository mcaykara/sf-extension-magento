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
    define(['ApiClient', 'model/Body2', 'model/Body3', 'model/CustomerDataGroupInterface', 'model/CustomerDataGroupSearchResultsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body2'), require('../model/Body3'), require('../model/CustomerDataGroupInterface'), require('../model/CustomerDataGroupSearchResultsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CustomerGroupRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body2, root.magento.Body3, root.magento.CustomerDataGroupInterface, root.magento.CustomerDataGroupSearchResultsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body2, Body3, CustomerDataGroupInterface, CustomerDataGroupSearchResultsInterface, ErrorResponse) {
  'use strict';

  /**
   * CustomerGroupRepositoryV1 service.
   * @module api/CustomerGroupRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CustomerGroupRepositoryV1Api. 
   * @alias module:api/CustomerGroupRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customerGroupRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete customer group by ID.
     * @param {Number} id 
     * @param {module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.customerGroupRepositoryV1DeleteByIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerGroupRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'id': id
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
        '/V1/customerGroups/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerGroupRepositoryV1GetByIdGet operation.
     * @callback module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1GetByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataGroupInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customer group by group ID.
     * @param {Number} id 
     * @param {module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1GetByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataGroupInterface}
     */
    this.customerGroupRepositoryV1GetByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerGroupRepositoryV1GetByIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = CustomerDataGroupInterface;

      return this.apiClient.callApi(
        '/V1/customerGroups/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerGroupRepositoryV1GetListGet operation.
     * @callback module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataGroupSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataGroupSearchResultsInterface}
     */
    this.customerGroupRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = CustomerDataGroupSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/customerGroups/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerGroupRepositoryV1SavePost operation.
     * @callback module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataGroupInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save customer group.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body3} opts.body 
     * @param {module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataGroupInterface}
     */
    this.customerGroupRepositoryV1SavePost = function(opts, callback) {
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
      var returnType = CustomerDataGroupInterface;

      return this.apiClient.callApi(
        '/V1/customerGroups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerGroupRepositoryV1SavePut operation.
     * @callback module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataGroupInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save customer group.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body2} opts.body 
     * @param {module:api/CustomerGroupRepositoryV1Api~customerGroupRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataGroupInterface}
     */
    this.customerGroupRepositoryV1SavePut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerGroupRepositoryV1SavePut");
      }


      var pathParams = {
        'id': id
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
      var returnType = CustomerDataGroupInterface;

      return this.apiClient.callApi(
        '/V1/customerGroups/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));