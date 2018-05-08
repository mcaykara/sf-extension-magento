# magento.CatalogProductCustomOptionTypeListV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductCustomOptionTypeListV1GetItemsGet**](CatalogProductCustomOptionTypeListV1Api.md#catalogProductCustomOptionTypeListV1GetItemsGet) | **GET** /V1/products/options/types | 


<a name="catalogProductCustomOptionTypeListV1GetItemsGet"></a>
# **catalogProductCustomOptionTypeListV1GetItemsGet**
> [CatalogDataProductCustomOptionTypeInterface] catalogProductCustomOptionTypeListV1GetItemsGet()



Get custom option types

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionTypeListV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionTypeListV1GetItemsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CatalogDataProductCustomOptionTypeInterface]**](CatalogDataProductCustomOptionTypeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

