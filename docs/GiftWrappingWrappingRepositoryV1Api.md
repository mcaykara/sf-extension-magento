# magento.GiftWrappingWrappingRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftWrappingWrappingRepositoryV1DeleteByIdDelete**](GiftWrappingWrappingRepositoryV1Api.md#giftWrappingWrappingRepositoryV1DeleteByIdDelete) | **DELETE** /V1/gift-wrappings/{id} | 
[**giftWrappingWrappingRepositoryV1GetGet**](GiftWrappingWrappingRepositoryV1Api.md#giftWrappingWrappingRepositoryV1GetGet) | **GET** /V1/gift-wrappings/{id} | 
[**giftWrappingWrappingRepositoryV1GetListGet**](GiftWrappingWrappingRepositoryV1Api.md#giftWrappingWrappingRepositoryV1GetListGet) | **GET** /V1/gift-wrappings | 
[**giftWrappingWrappingRepositoryV1SavePost**](GiftWrappingWrappingRepositoryV1Api.md#giftWrappingWrappingRepositoryV1SavePost) | **POST** /V1/gift-wrappings | 
[**giftWrappingWrappingRepositoryV1SavePut**](GiftWrappingWrappingRepositoryV1Api.md#giftWrappingWrappingRepositoryV1SavePut) | **PUT** /V1/gift-wrappings/{wrappingId} | 


<a name="giftWrappingWrappingRepositoryV1DeleteByIdDelete"></a>
# **giftWrappingWrappingRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; giftWrappingWrappingRepositoryV1DeleteByIdDelete(id)



Delete gift wrapping

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftWrappingWrappingRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftWrappingWrappingRepositoryV1DeleteByIdDelete(id, callback);
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

<a name="giftWrappingWrappingRepositoryV1GetGet"></a>
# **giftWrappingWrappingRepositoryV1GetGet**
> GiftWrappingDataWrappingInterface giftWrappingWrappingRepositoryV1GetGet(id, opts)



Return data object for specified wrapping ID and store.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftWrappingWrappingRepositoryV1Api();

var id = 56; // Number | 

var opts = { 
  'storeId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftWrappingWrappingRepositoryV1GetGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **storeId** | **Number**|  | [optional] 

### Return type

[**GiftWrappingDataWrappingInterface**](GiftWrappingDataWrappingInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftWrappingWrappingRepositoryV1GetListGet"></a>
# **giftWrappingWrappingRepositoryV1GetListGet**
> GiftWrappingDataWrappingSearchResultsInterface giftWrappingWrappingRepositoryV1GetListGet(opts)



Return list of gift wrapping data objects based on search criteria This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#WrappingRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftWrappingWrappingRepositoryV1Api();

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
apiInstance.giftWrappingWrappingRepositoryV1GetListGet(opts, callback);
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

[**GiftWrappingDataWrappingSearchResultsInterface**](GiftWrappingDataWrappingSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftWrappingWrappingRepositoryV1SavePost"></a>
# **giftWrappingWrappingRepositoryV1SavePost**
> GiftWrappingDataWrappingInterface giftWrappingWrappingRepositoryV1SavePost(opts)



Create/Update new gift wrapping with data object values

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftWrappingWrappingRepositoryV1Api();

var opts = { 
  'body': new magento.Body121() // Body121 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftWrappingWrappingRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body121**](Body121.md)|  | [optional] 

### Return type

[**GiftWrappingDataWrappingInterface**](GiftWrappingDataWrappingInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftWrappingWrappingRepositoryV1SavePut"></a>
# **giftWrappingWrappingRepositoryV1SavePut**
> GiftWrappingDataWrappingInterface giftWrappingWrappingRepositoryV1SavePut(wrappingId, opts)



Create/Update new gift wrapping with data object values

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftWrappingWrappingRepositoryV1Api();

var wrappingId = "wrappingId_example"; // String | 

var opts = { 
  'body': new magento.Body122() // Body122 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftWrappingWrappingRepositoryV1SavePut(wrappingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wrappingId** | **String**|  | 
 **body** | [**Body122**](Body122.md)|  | [optional] 

### Return type

[**GiftWrappingDataWrappingInterface**](GiftWrappingDataWrappingInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

