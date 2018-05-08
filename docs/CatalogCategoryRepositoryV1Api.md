# magento.CatalogCategoryRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryRepositoryV1DeleteByIdentifierDelete**](CatalogCategoryRepositoryV1Api.md#catalogCategoryRepositoryV1DeleteByIdentifierDelete) | **DELETE** /V1/categories/{categoryId} | 
[**catalogCategoryRepositoryV1GetGet**](CatalogCategoryRepositoryV1Api.md#catalogCategoryRepositoryV1GetGet) | **GET** /V1/categories/{categoryId} | 
[**catalogCategoryRepositoryV1SavePost**](CatalogCategoryRepositoryV1Api.md#catalogCategoryRepositoryV1SavePost) | **POST** /V1/categories | 
[**catalogCategoryRepositoryV1SavePut**](CatalogCategoryRepositoryV1Api.md#catalogCategoryRepositoryV1SavePut) | **PUT** /V1/categories/{id} | 


<a name="catalogCategoryRepositoryV1DeleteByIdentifierDelete"></a>
# **catalogCategoryRepositoryV1DeleteByIdentifierDelete**
> &#39;Boolean&#39; catalogCategoryRepositoryV1DeleteByIdentifierDelete(categoryId)



Delete category by identifier

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryRepositoryV1Api();

var categoryId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryRepositoryV1DeleteByIdentifierDelete(categoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryRepositoryV1GetGet"></a>
# **catalogCategoryRepositoryV1GetGet**
> CatalogDataCategoryInterface catalogCategoryRepositoryV1GetGet(categoryId, opts)



Get info about category by category id

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryRepositoryV1Api();

var categoryId = 56; // Number | 

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
apiInstance.catalogCategoryRepositoryV1GetGet(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 
 **storeId** | **Number**|  | [optional] 

### Return type

[**CatalogDataCategoryInterface**](CatalogDataCategoryInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryRepositoryV1SavePost"></a>
# **catalogCategoryRepositoryV1SavePost**
> CatalogDataCategoryInterface catalogCategoryRepositoryV1SavePost(opts)



Create category service

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryRepositoryV1Api();

var opts = { 
  'body': new magento.Body30() // Body30 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body30**](Body30.md)|  | [optional] 

### Return type

[**CatalogDataCategoryInterface**](CatalogDataCategoryInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryRepositoryV1SavePut"></a>
# **catalogCategoryRepositoryV1SavePut**
> CatalogDataCategoryInterface catalogCategoryRepositoryV1SavePut(id, opts)



Create category service

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body31() // Body31 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryRepositoryV1SavePut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body31**](Body31.md)|  | [optional] 

### Return type

[**CatalogDataCategoryInterface**](CatalogDataCategoryInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

