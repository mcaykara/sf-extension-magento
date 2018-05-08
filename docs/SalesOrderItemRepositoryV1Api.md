# magento.SalesOrderItemRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesOrderItemRepositoryV1GetGet**](SalesOrderItemRepositoryV1Api.md#salesOrderItemRepositoryV1GetGet) | **GET** /V1/orders/items/{id} | 
[**salesOrderItemRepositoryV1GetListGet**](SalesOrderItemRepositoryV1Api.md#salesOrderItemRepositoryV1GetListGet) | **GET** /V1/orders/items | 


<a name="salesOrderItemRepositoryV1GetGet"></a>
# **salesOrderItemRepositoryV1GetGet**
> SalesDataOrderItemInterface salesOrderItemRepositoryV1GetGet(id)



Loads a specified order item.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderItemRepositoryV1Api();

var id = 56; // Number | The order item ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderItemRepositoryV1GetGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order item ID. | 

### Return type

[**SalesDataOrderItemInterface**](SalesDataOrderItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderItemRepositoryV1GetListGet"></a>
# **salesOrderItemRepositoryV1GetListGet**
> SalesDataOrderItemSearchResultInterface salesOrderItemRepositoryV1GetListGet(opts)



Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderItemRepositoryV1Api();

var opts = { 
  'searchCriteriaFilterGroupsFiltersField': "searchCriteriaFilterGroupsFiltersField_example", // String | Field
  'searchCriteriaFilterGroupsFiltersValue': "searchCriteriaFilterGroupsFiltersValue_example", // String | Value
  'searchCriteriaFilterGroupsFiltersConditionType': "searchCriteriaFilterGroupsFiltersConditionType_example", // String | Condition type
  'searchCriteriaSortOrdersField': "searchCriteriaSortOrdersField_example", // String | Sorting field.
  'searchCriteriaSortOrdersDirection': "searchCriteriaSortOrdersDirection_example", // String | Sorting direction.
  'searchCriteriaPageSize': 56, // Number | Page size.
  'searchCriteriaCurrentPage': 56 // Number | Current page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderItemRepositoryV1GetListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchCriteriaFilterGroupsFiltersField** | **String**| Field | [optional] 
 **searchCriteriaFilterGroupsFiltersValue** | **String**| Value | [optional] 
 **searchCriteriaFilterGroupsFiltersConditionType** | **String**| Condition type | [optional] 
 **searchCriteriaSortOrdersField** | **String**| Sorting field. | [optional] 
 **searchCriteriaSortOrdersDirection** | **String**| Sorting direction. | [optional] 
 **searchCriteriaPageSize** | **Number**| Page size. | [optional] 
 **searchCriteriaCurrentPage** | **Number**| Current page. | [optional] 

### Return type

[**SalesDataOrderItemSearchResultInterface**](SalesDataOrderItemSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

