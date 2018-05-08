# magento.CatalogCategoryLinkRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryLinkRepositoryV1DeleteByIdsDelete**](CatalogCategoryLinkRepositoryV1Api.md#catalogCategoryLinkRepositoryV1DeleteByIdsDelete) | **DELETE** /V1/categories/{categoryId}/products/{sku} | 
[**catalogCategoryLinkRepositoryV1SavePost**](CatalogCategoryLinkRepositoryV1Api.md#catalogCategoryLinkRepositoryV1SavePost) | **POST** /V1/categories/{categoryId}/products | 
[**catalogCategoryLinkRepositoryV1SavePut**](CatalogCategoryLinkRepositoryV1Api.md#catalogCategoryLinkRepositoryV1SavePut) | **PUT** /V1/categories/{categoryId}/products | 


<a name="catalogCategoryLinkRepositoryV1DeleteByIdsDelete"></a>
# **catalogCategoryLinkRepositoryV1DeleteByIdsDelete**
> &#39;Boolean&#39; catalogCategoryLinkRepositoryV1DeleteByIdsDelete(categoryId, sku)



Remove the product assignment from the category by category id and sku

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryLinkRepositoryV1Api();

var categoryId = "categoryId_example"; // String | 

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryLinkRepositoryV1DeleteByIdsDelete(categoryId, sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **sku** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryLinkRepositoryV1SavePost"></a>
# **catalogCategoryLinkRepositoryV1SavePost**
> &#39;Boolean&#39; catalogCategoryLinkRepositoryV1SavePost(categoryId, opts)



Assign a product to the required category

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryLinkRepositoryV1Api();

var categoryId = "categoryId_example"; // String | 

var opts = { 
  'body': new magento.Body38() // Body38 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryLinkRepositoryV1SavePost(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **body** | [**Body38**](Body38.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryLinkRepositoryV1SavePut"></a>
# **catalogCategoryLinkRepositoryV1SavePut**
> &#39;Boolean&#39; catalogCategoryLinkRepositoryV1SavePut(categoryId, opts)



Assign a product to the required category

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryLinkRepositoryV1Api();

var categoryId = "categoryId_example"; // String | 

var opts = { 
  'body': new magento.Body37() // Body37 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryLinkRepositoryV1SavePut(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **body** | [**Body37**](Body37.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

