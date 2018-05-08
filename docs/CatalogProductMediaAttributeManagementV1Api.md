# magento.CatalogProductMediaAttributeManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductMediaAttributeManagementV1GetListGet**](CatalogProductMediaAttributeManagementV1Api.md#catalogProductMediaAttributeManagementV1GetListGet) | **GET** /V1/products/media/types/{attributeSetName} | 


<a name="catalogProductMediaAttributeManagementV1GetListGet"></a>
# **catalogProductMediaAttributeManagementV1GetListGet**
> [CatalogDataProductAttributeInterface] catalogProductMediaAttributeManagementV1GetListGet(attributeSetName)



Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductMediaAttributeManagementV1Api();

var attributeSetName = "attributeSetName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductMediaAttributeManagementV1GetListGet(attributeSetName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetName** | **String**|  | 

### Return type

[**[CatalogDataProductAttributeInterface]**](CatalogDataProductAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

