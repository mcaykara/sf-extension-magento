# magento.CmsPageRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cmsPageRepositoryV1DeleteByIdDelete**](CmsPageRepositoryV1Api.md#cmsPageRepositoryV1DeleteByIdDelete) | **DELETE** /V1/cmsPage/{pageId} | 
[**cmsPageRepositoryV1GetByIdGet**](CmsPageRepositoryV1Api.md#cmsPageRepositoryV1GetByIdGet) | **GET** /V1/cmsPage/{pageId} | 
[**cmsPageRepositoryV1GetListGet**](CmsPageRepositoryV1Api.md#cmsPageRepositoryV1GetListGet) | **GET** /V1/cmsPage/search | 
[**cmsPageRepositoryV1SavePost**](CmsPageRepositoryV1Api.md#cmsPageRepositoryV1SavePost) | **POST** /V1/cmsPage | 
[**cmsPageRepositoryV1SavePut**](CmsPageRepositoryV1Api.md#cmsPageRepositoryV1SavePut) | **PUT** /V1/cmsPage/{id} | 


<a name="cmsPageRepositoryV1DeleteByIdDelete"></a>
# **cmsPageRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; cmsPageRepositoryV1DeleteByIdDelete(pageId)



Delete page by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsPageRepositoryV1Api();

var pageId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsPageRepositoryV1DeleteByIdDelete(pageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsPageRepositoryV1GetByIdGet"></a>
# **cmsPageRepositoryV1GetByIdGet**
> CmsDataPageInterface cmsPageRepositoryV1GetByIdGet(pageId)



Retrieve page.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsPageRepositoryV1Api();

var pageId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsPageRepositoryV1GetByIdGet(pageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | **Number**|  | 

### Return type

[**CmsDataPageInterface**](CmsDataPageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsPageRepositoryV1GetListGet"></a>
# **cmsPageRepositoryV1GetListGet**
> CmsDataPageSearchResultsInterface cmsPageRepositoryV1GetListGet(opts)



Retrieve pages matching the specified criteria.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsPageRepositoryV1Api();

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
apiInstance.cmsPageRepositoryV1GetListGet(opts, callback);
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

[**CmsDataPageSearchResultsInterface**](CmsDataPageSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsPageRepositoryV1SavePost"></a>
# **cmsPageRepositoryV1SavePost**
> CmsDataPageInterface cmsPageRepositoryV1SavePost(opts)



Save page.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsPageRepositoryV1Api();

var opts = { 
  'body': new magento.Body14() // Body14 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsPageRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body14**](Body14.md)|  | [optional] 

### Return type

[**CmsDataPageInterface**](CmsDataPageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cmsPageRepositoryV1SavePut"></a>
# **cmsPageRepositoryV1SavePut**
> CmsDataPageInterface cmsPageRepositoryV1SavePut(id, opts)



Save page.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CmsPageRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body15() // Body15 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cmsPageRepositoryV1SavePut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body15**](Body15.md)|  | [optional] 

### Return type

[**CmsDataPageInterface**](CmsDataPageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

