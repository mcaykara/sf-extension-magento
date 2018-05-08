# magento.CatalogProductLinkTypeListV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductLinkTypeListV1GetItemAttributesGet**](CatalogProductLinkTypeListV1Api.md#catalogProductLinkTypeListV1GetItemAttributesGet) | **GET** /V1/products/links/{type}/attributes | 
[**catalogProductLinkTypeListV1GetItemsGet**](CatalogProductLinkTypeListV1Api.md#catalogProductLinkTypeListV1GetItemsGet) | **GET** /V1/products/links/types | 


<a name="catalogProductLinkTypeListV1GetItemAttributesGet"></a>
# **catalogProductLinkTypeListV1GetItemAttributesGet**
> [CatalogDataProductLinkAttributeInterface] catalogProductLinkTypeListV1GetItemAttributesGet(type)



Provide a list of the product link type attributes

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkTypeListV1Api();

var type = "type_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkTypeListV1GetItemAttributesGet(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 

### Return type

[**[CatalogDataProductLinkAttributeInterface]**](CatalogDataProductLinkAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductLinkTypeListV1GetItemsGet"></a>
# **catalogProductLinkTypeListV1GetItemsGet**
> [CatalogDataProductLinkTypeInterface] catalogProductLinkTypeListV1GetItemsGet()



Retrieve information about available product link types

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkTypeListV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkTypeListV1GetItemsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CatalogDataProductLinkTypeInterface]**](CatalogDataProductLinkTypeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

