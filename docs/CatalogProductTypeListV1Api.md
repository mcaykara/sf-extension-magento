# magento.CatalogProductTypeListV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductTypeListV1GetProductTypesGet**](CatalogProductTypeListV1Api.md#catalogProductTypeListV1GetProductTypesGet) | **GET** /V1/products/types | 


<a name="catalogProductTypeListV1GetProductTypesGet"></a>
# **catalogProductTypeListV1GetProductTypesGet**
> [CatalogDataProductTypeInterface] catalogProductTypeListV1GetProductTypesGet()



Retrieve available product types

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductTypeListV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductTypeListV1GetProductTypesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CatalogDataProductTypeInterface]**](CatalogDataProductTypeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

