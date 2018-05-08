# magento.CustomerAddressMetadataV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerAddressMetadataV1GetAllAttributesMetadataGet**](CustomerAddressMetadataV1Api.md#customerAddressMetadataV1GetAllAttributesMetadataGet) | **GET** /V1/attributeMetadata/customerAddress | 
[**customerAddressMetadataV1GetAttributeMetadataGet**](CustomerAddressMetadataV1Api.md#customerAddressMetadataV1GetAttributeMetadataGet) | **GET** /V1/attributeMetadata/customerAddress/attribute/{attributeCode} | 
[**customerAddressMetadataV1GetAttributesGet**](CustomerAddressMetadataV1Api.md#customerAddressMetadataV1GetAttributesGet) | **GET** /V1/attributeMetadata/customerAddress/form/{formCode} | 
[**customerAddressMetadataV1GetCustomAttributesMetadataGet**](CustomerAddressMetadataV1Api.md#customerAddressMetadataV1GetCustomAttributesMetadataGet) | **GET** /V1/attributeMetadata/customerAddress/custom | 


<a name="customerAddressMetadataV1GetAllAttributesMetadataGet"></a>
# **customerAddressMetadataV1GetAllAttributesMetadataGet**
> [CustomerDataAttributeMetadataInterface] customerAddressMetadataV1GetAllAttributesMetadataGet()



Get all attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressMetadataV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressMetadataV1GetAllAttributesMetadataGet(callback);
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

<a name="customerAddressMetadataV1GetAttributeMetadataGet"></a>
# **customerAddressMetadataV1GetAttributeMetadataGet**
> CustomerDataAttributeMetadataInterface customerAddressMetadataV1GetAttributeMetadataGet(attributeCode)



Retrieve attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressMetadataV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressMetadataV1GetAttributeMetadataGet(attributeCode, callback);
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

<a name="customerAddressMetadataV1GetAttributesGet"></a>
# **customerAddressMetadataV1GetAttributesGet**
> [CustomerDataAttributeMetadataInterface] customerAddressMetadataV1GetAttributesGet(formCode)



Retrieve all attributes filtered by form code

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressMetadataV1Api();

var formCode = "formCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressMetadataV1GetAttributesGet(formCode, callback);
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

<a name="customerAddressMetadataV1GetCustomAttributesMetadataGet"></a>
# **customerAddressMetadataV1GetCustomAttributesMetadataGet**
> [CustomerDataAttributeMetadataInterface] customerAddressMetadataV1GetCustomAttributesMetadataGet(opts)



Get custom attributes metadata for the given data interface.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressMetadataV1Api();

var opts = { 
  'dataInterfaceName': "dataInterfaceName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressMetadataV1GetCustomAttributesMetadataGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataInterfaceName** | **String**|  | [optional] 

### Return type

[**[CustomerDataAttributeMetadataInterface]**](CustomerDataAttributeMetadataInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

