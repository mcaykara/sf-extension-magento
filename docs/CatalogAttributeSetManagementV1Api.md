# magento.CatalogAttributeSetManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogAttributeSetManagementV1CreatePost**](CatalogAttributeSetManagementV1Api.md#catalogAttributeSetManagementV1CreatePost) | **POST** /V1/products/attribute-sets | 


<a name="catalogAttributeSetManagementV1CreatePost"></a>
# **catalogAttributeSetManagementV1CreatePost**
> EavDataAttributeSetInterface catalogAttributeSetManagementV1CreatePost(opts)



Create attribute set from data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogAttributeSetManagementV1Api();

var opts = { 
  'body': new magento.Body23() // Body23 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogAttributeSetManagementV1CreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body23**](Body23.md)|  | [optional] 

### Return type

[**EavDataAttributeSetInterface**](EavDataAttributeSetInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

