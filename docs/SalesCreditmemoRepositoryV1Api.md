# magento.SalesCreditmemoRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesCreditmemoRepositoryV1GetGet**](SalesCreditmemoRepositoryV1Api.md#salesCreditmemoRepositoryV1GetGet) | **GET** /V1/creditmemo/{id} | 
[**salesCreditmemoRepositoryV1GetListGet**](SalesCreditmemoRepositoryV1Api.md#salesCreditmemoRepositoryV1GetListGet) | **GET** /V1/creditmemos | 
[**salesCreditmemoRepositoryV1SavePost**](SalesCreditmemoRepositoryV1Api.md#salesCreditmemoRepositoryV1SavePost) | **POST** /V1/creditmemo | 


<a name="salesCreditmemoRepositoryV1GetGet"></a>
# **salesCreditmemoRepositoryV1GetGet**
> SalesDataCreditmemoInterface salesCreditmemoRepositoryV1GetGet(id)



Loads a specified credit memo.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoRepositoryV1Api();

var id = 56; // Number | The credit memo ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoRepositoryV1GetGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The credit memo ID. | 

### Return type

[**SalesDataCreditmemoInterface**](SalesDataCreditmemoInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesCreditmemoRepositoryV1GetListGet"></a>
# **salesCreditmemoRepositoryV1GetListGet**
> SalesDataCreditmemoSearchResultInterface salesCreditmemoRepositoryV1GetListGet(opts)



Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoRepositoryV1Api();

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
apiInstance.salesCreditmemoRepositoryV1GetListGet(opts, callback);
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

[**SalesDataCreditmemoSearchResultInterface**](SalesDataCreditmemoSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesCreditmemoRepositoryV1SavePost"></a>
# **salesCreditmemoRepositoryV1SavePost**
> SalesDataCreditmemoInterface salesCreditmemoRepositoryV1SavePost(opts)



Performs persist operations for a specified credit memo.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoRepositoryV1Api();

var opts = { 
  'body': new magento.Body71() // Body71 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body71**](Body71.md)|  | [optional] 

### Return type

[**SalesDataCreditmemoInterface**](SalesDataCreditmemoInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

