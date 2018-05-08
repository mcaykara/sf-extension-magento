# magento.CatalogProductLinkRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductLinkRepositoryV1DeleteByIdDelete**](CatalogProductLinkRepositoryV1Api.md#catalogProductLinkRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/{sku}/links/{type}/{linkedProductSku} | 
[**catalogProductLinkRepositoryV1SavePut**](CatalogProductLinkRepositoryV1Api.md#catalogProductLinkRepositoryV1SavePut) | **PUT** /V1/products/{sku}/links | 


<a name="catalogProductLinkRepositoryV1DeleteByIdDelete"></a>
# **catalogProductLinkRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogProductLinkRepositoryV1DeleteByIdDelete(sku, type, linkedProductSku)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var type = "type_example"; // String | 

var linkedProductSku = "linkedProductSku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkRepositoryV1DeleteByIdDelete(sku, type, linkedProductSku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **type** | **String**|  | 
 **linkedProductSku** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductLinkRepositoryV1SavePut"></a>
# **catalogProductLinkRepositoryV1SavePut**
> &#39;Boolean&#39; catalogProductLinkRepositoryV1SavePut(sku, opts)



Save product link

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body35() // Body35 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkRepositoryV1SavePut(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body35**](Body35.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

