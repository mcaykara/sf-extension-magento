# magento.CmsBlockRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cmsBlockRepositoryV1DeleteByIdDelete**](CmsBlockRepositoryV1Api.md#cmsBlockRepositoryV1DeleteByIdDelete) | **DELETE** /V1/cmsBlock/{blockId} | 
[**cmsBlockRepositoryV1GetByIdGet**](CmsBlockRepositoryV1Api.md#cmsBlockRepositoryV1GetByIdGet) | **GET** /V1/cmsBlock/{blockId} | 
[**cmsBlockRepositoryV1GetListGet**](CmsBlockRepositoryV1Api.md#cmsBlockRepositoryV1GetListGet) | **GET** /V1/cmsBlock/search | 
[**cmsBlockRepositoryV1SavePost**](CmsBlockRepositoryV1Api.md#cmsBlockRepositoryV1SavePost) | **POST** /V1/cmsBlock | 
[**cmsBlockRepositoryV1SavePut**](CmsBlockRepositoryV1Api.md#cmsBlockRepositoryV1SavePut) | **PUT** /V1/cmsBlock/{id} | 


<a name="cmsBlockRepositoryV1DeleteByIdDelete"></a>
# **cmsBlockRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; cmsBlockRepositoryV1DeleteByIdDelete(blockId)



Delete block by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsBlockRepositoryV1Api();

var blockId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsBlockRepositoryV1DeleteByIdDelete(blockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsBlockRepositoryV1GetByIdGet"></a>
# **cmsBlockRepositoryV1GetByIdGet**
> CmsDataBlockInterface cmsBlockRepositoryV1GetByIdGet(blockId)



Retrieve block.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsBlockRepositoryV1Api();

var blockId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsBlockRepositoryV1GetByIdGet(blockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockId** | **Number**|  | 

### Return type

[**CmsDataBlockInterface**](CmsDataBlockInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsBlockRepositoryV1GetListGet"></a>
# **cmsBlockRepositoryV1GetListGet**
> CmsDataBlockSearchResultsInterface cmsBlockRepositoryV1GetListGet(opts)



Retrieve blocks matching the specified criteria.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsBlockRepositoryV1Api();

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
apiInstance.cmsBlockRepositoryV1GetListGet(opts, callback);
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

[**CmsDataBlockSearchResultsInterface**](CmsDataBlockSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsBlockRepositoryV1SavePost"></a>
# **cmsBlockRepositoryV1SavePost**
> CmsDataBlockInterface cmsBlockRepositoryV1SavePost(opts)



Save block.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsBlockRepositoryV1Api();

var opts = { 
  'body': new magento.Body16() // Body16 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsBlockRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body16**](Body16.md)|  | [optional] 

### Return type

[**CmsDataBlockInterface**](CmsDataBlockInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsBlockRepositoryV1SavePut"></a>
# **cmsBlockRepositoryV1SavePut**
> CmsDataBlockInterface cmsBlockRepositoryV1SavePut(id, opts)



Save block.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsBlockRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body17() // Body17 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsBlockRepositoryV1SavePut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body17**](Body17.md)|  | [optional] 

### Return type

[**CmsDataBlockInterface**](CmsDataBlockInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

