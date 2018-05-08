# magento.CatalogCategoryLinkManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryLinkManagementV1GetAssignedProductsGet**](CatalogCategoryLinkManagementV1Api.md#catalogCategoryLinkManagementV1GetAssignedProductsGet) | **GET** /V1/categories/{categoryId}/products | 


<a name="catalogCategoryLinkManagementV1GetAssignedProductsGet"></a>
# **catalogCategoryLinkManagementV1GetAssignedProductsGet**
> [CatalogDataCategoryProductLinkInterface] catalogCategoryLinkManagementV1GetAssignedProductsGet(categoryId)



Get products assigned to category

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryLinkManagementV1Api();

var categoryId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryLinkManagementV1GetAssignedProductsGet(categoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 

### Return type

[**[CatalogDataCategoryProductLinkInterface]**](CatalogDataCategoryProductLinkInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

