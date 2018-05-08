# magento.CatalogCategoryManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryManagementV1GetTreeGet**](CatalogCategoryManagementV1Api.md#catalogCategoryManagementV1GetTreeGet) | **GET** /V1/categories | 
[**catalogCategoryManagementV1MovePut**](CatalogCategoryManagementV1Api.md#catalogCategoryManagementV1MovePut) | **PUT** /V1/categories/{categoryId}/move | 


<a name="catalogCategoryManagementV1GetTreeGet"></a>
# **catalogCategoryManagementV1GetTreeGet**
> CatalogDataCategoryTreeInterface catalogCategoryManagementV1GetTreeGet(opts)



Retrieve list of categories

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryManagementV1Api();

var opts = { 
  'rootCategoryId': 56, // Number | 
  'depth': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryManagementV1GetTreeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootCategoryId** | **Number**|  | [optional] 
 **depth** | **Number**|  | [optional] 

### Return type

[**CatalogDataCategoryTreeInterface**](CatalogDataCategoryTreeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryManagementV1MovePut"></a>
# **catalogCategoryManagementV1MovePut**
> &#39;Boolean&#39; catalogCategoryManagementV1MovePut(categoryId, opts)



Move category

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryManagementV1Api();

var categoryId = 56; // Number | 

var opts = { 
  'body': new magento.Body32() // Body32 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryManagementV1MovePut(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 
 **body** | [**Body32**](Body32.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

