# magento.RmaRmaAttributesManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rmaRmaAttributesManagementV1GetAllAttributesMetadataGet**](RmaRmaAttributesManagementV1Api.md#rmaRmaAttributesManagementV1GetAllAttributesMetadataGet) | **GET** /V1/returnsAttributeMetadata | 
[**rmaRmaAttributesManagementV1GetAttributeMetadataGet**](RmaRmaAttributesManagementV1Api.md#rmaRmaAttributesManagementV1GetAttributeMetadataGet) | **GET** /V1/returnsAttributeMetadata/{attributeCode} | 
[**rmaRmaAttributesManagementV1GetAttributesGet**](RmaRmaAttributesManagementV1Api.md#rmaRmaAttributesManagementV1GetAttributesGet) | **GET** /V1/returnsAttributeMetadata/form/{formCode} | 
[**rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet**](RmaRmaAttributesManagementV1Api.md#rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet) | **GET** /V1/returnsAttributeMetadata/custom | 


<a name="rmaRmaAttributesManagementV1GetAllAttributesMetadataGet"></a>
# **rmaRmaAttributesManagementV1GetAllAttributesMetadataGet**
> [CustomerDataAttributeMetadataInterface] rmaRmaAttributesManagementV1GetAllAttributesMetadataGet()



Get all attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaAttributesManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaAttributesManagementV1GetAllAttributesMetadataGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CustomerDataAttributeMetadataInterface]**](CustomerDataAttributeMetadataInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaAttributesManagementV1GetAttributeMetadataGet"></a>
# **rmaRmaAttributesManagementV1GetAttributeMetadataGet**
> CustomerDataAttributeMetadataInterface rmaRmaAttributesManagementV1GetAttributeMetadataGet(attributeCode)



Retrieve attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaAttributesManagementV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaAttributesManagementV1GetAttributeMetadataGet(attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 

### Return type

[**CustomerDataAttributeMetadataInterface**](CustomerDataAttributeMetadataInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaAttributesManagementV1GetAttributesGet"></a>
# **rmaRmaAttributesManagementV1GetAttributesGet**
> [CustomerDataAttributeMetadataInterface] rmaRmaAttributesManagementV1GetAttributesGet(formCode)



Retrieve all attributes filtered by form code

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaAttributesManagementV1Api();

var formCode = "formCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaAttributesManagementV1GetAttributesGet(formCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formCode** | **String**|  | 

### Return type

[**[CustomerDataAttributeMetadataInterface]**](CustomerDataAttributeMetadataInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet"></a>
# **rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet**
> [FrameworkMetadataObjectInterface] rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet(opts)



Get custom attribute metadata for the given Data object&#39;s attribute set

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaAttributesManagementV1Api();

var opts = { 
  'dataObjectClassName': "dataObjectClassName_example" // String | Data object class name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataObjectClassName** | **String**| Data object class name | [optional] 

### Return type

[**[FrameworkMetadataObjectInterface]**](FrameworkMetadataObjectInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

