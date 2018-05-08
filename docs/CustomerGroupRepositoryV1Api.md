# magento.CustomerGroupRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerGroupRepositoryV1DeleteByIdDelete**](CustomerGroupRepositoryV1Api.md#customerGroupRepositoryV1DeleteByIdDelete) | **DELETE** /V1/customerGroups/{id} | 
[**customerGroupRepositoryV1GetByIdGet**](CustomerGroupRepositoryV1Api.md#customerGroupRepositoryV1GetByIdGet) | **GET** /V1/customerGroups/{id} | 
[**customerGroupRepositoryV1GetListGet**](CustomerGroupRepositoryV1Api.md#customerGroupRepositoryV1GetListGet) | **GET** /V1/customerGroups/search | 
[**customerGroupRepositoryV1SavePost**](CustomerGroupRepositoryV1Api.md#customerGroupRepositoryV1SavePost) | **POST** /V1/customerGroups | 
[**customerGroupRepositoryV1SavePut**](CustomerGroupRepositoryV1Api.md#customerGroupRepositoryV1SavePut) | **PUT** /V1/customerGroups/{id} | 


<a name="customerGroupRepositoryV1DeleteByIdDelete"></a>
# **customerGroupRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; customerGroupRepositoryV1DeleteByIdDelete(id)



Delete customer group by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupRepositoryV1DeleteByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupRepositoryV1GetByIdGet"></a>
# **customerGroupRepositoryV1GetByIdGet**
> CustomerDataGroupInterface customerGroupRepositoryV1GetByIdGet(id)



Get customer group by group ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupRepositoryV1GetByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**CustomerDataGroupInterface**](CustomerDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupRepositoryV1GetListGet"></a>
# **customerGroupRepositoryV1GetListGet**
> CustomerDataGroupSearchResultsInterface customerGroupRepositoryV1GetListGet(opts)



Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupRepositoryV1Api();

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
apiInstance.customerGroupRepositoryV1GetListGet(opts, callback);
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

[**CustomerDataGroupSearchResultsInterface**](CustomerDataGroupSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupRepositoryV1SavePost"></a>
# **customerGroupRepositoryV1SavePost**
> CustomerDataGroupInterface customerGroupRepositoryV1SavePost(opts)



Save customer group.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupRepositoryV1Api();

var opts = { 
  'body': new magento.Body3() // Body3 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)|  | [optional] 

### Return type

[**CustomerDataGroupInterface**](CustomerDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupRepositoryV1SavePut"></a>
# **customerGroupRepositoryV1SavePut**
> CustomerDataGroupInterface customerGroupRepositoryV1SavePut(id, opts)



Save customer group.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body2() // Body2 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupRepositoryV1SavePut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body2**](Body2.md)|  | [optional] 

### Return type

[**CustomerDataGroupInterface**](CustomerDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

