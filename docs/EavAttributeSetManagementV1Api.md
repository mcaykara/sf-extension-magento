# magento.EavAttributeSetManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eavAttributeSetManagementV1CreatePost**](EavAttributeSetManagementV1Api.md#eavAttributeSetManagementV1CreatePost) | **POST** /V1/eav/attribute-sets | 


<a name="eavAttributeSetManagementV1CreatePost"></a>
# **eavAttributeSetManagementV1CreatePost**
> EavDataAttributeSetInterface eavAttributeSetManagementV1CreatePost(opts)



Create attribute set from data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.EavAttributeSetManagementV1Api();

var opts = { 
  'body': new magento.Body1() // Body1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eavAttributeSetManagementV1CreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)|  | [optional] 

### Return type

[**EavDataAttributeSetInterface**](EavDataAttributeSetInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

