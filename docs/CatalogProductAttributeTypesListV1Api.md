# magento.CatalogProductAttributeTypesListV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeTypesListV1GetItemsGet**](CatalogProductAttributeTypesListV1Api.md#catalogProductAttributeTypesListV1GetItemsGet) | **GET** /V1/products/attributes/types | 


<a name="catalogProductAttributeTypesListV1GetItemsGet"></a>
# **catalogProductAttributeTypesListV1GetItemsGet**
> [CatalogDataProductAttributeTypeInterface] catalogProductAttributeTypesListV1GetItemsGet()



Retrieve list of product attribute types

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeTypesListV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeTypesListV1GetItemsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CatalogDataProductAttributeTypeInterface]**](CatalogDataProductAttributeTypeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

