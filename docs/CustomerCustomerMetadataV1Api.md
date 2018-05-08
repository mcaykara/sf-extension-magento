# magento.CustomerCustomerMetadataV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerCustomerMetadataV1GetAllAttributesMetadataGet**](CustomerCustomerMetadataV1Api.md#customerCustomerMetadataV1GetAllAttributesMetadataGet) | **GET** /V1/attributeMetadata/customer | 
[**customerCustomerMetadataV1GetAttributeMetadataGet**](CustomerCustomerMetadataV1Api.md#customerCustomerMetadataV1GetAttributeMetadataGet) | **GET** /V1/attributeMetadata/customer/attribute/{attributeCode} | 
[**customerCustomerMetadataV1GetAttributesGet**](CustomerCustomerMetadataV1Api.md#customerCustomerMetadataV1GetAttributesGet) | **GET** /V1/attributeMetadata/customer/form/{formCode} | 
[**customerCustomerMetadataV1GetCustomAttributesMetadataGet**](CustomerCustomerMetadataV1Api.md#customerCustomerMetadataV1GetCustomAttributesMetadataGet) | **GET** /V1/attributeMetadata/customer/custom | 


<a name="customerCustomerMetadataV1GetAllAttributesMetadataGet"></a>
# **customerCustomerMetadataV1GetAllAttributesMetadataGet**
> [CustomerDataAttributeMetadataInterface] customerCustomerMetadataV1GetAllAttributesMetadataGet()



Get all attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerMetadataV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerMetadataV1GetAllAttributesMetadataGet(callback);
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

<a name="customerCustomerMetadataV1GetAttributeMetadataGet"></a>
# **customerCustomerMetadataV1GetAttributeMetadataGet**
> CustomerDataAttributeMetadataInterface customerCustomerMetadataV1GetAttributeMetadataGet(attributeCode)



Retrieve attribute metadata.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerMetadataV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerMetadataV1GetAttributeMetadataGet(attributeCode, callback);
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

<a name="customerCustomerMetadataV1GetAttributesGet"></a>
# **customerCustomerMetadataV1GetAttributesGet**
> [CustomerDataAttributeMetadataInterface] customerCustomerMetadataV1GetAttributesGet(formCode)



Retrieve all attributes filtered by form code

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerMetadataV1Api();

var formCode = "formCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerMetadataV1GetAttributesGet(formCode, callback);
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

<a name="customerCustomerMetadataV1GetCustomAttributesMetadataGet"></a>
# **customerCustomerMetadataV1GetCustomAttributesMetadataGet**
> [CustomerDataAttributeMetadataInterface] customerCustomerMetadataV1GetCustomAttributesMetadataGet(opts)



Get custom attributes metadata for the given data interface.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerMetadataV1Api();

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
apiInstance.customerCustomerMetadataV1GetCustomAttributesMetadataGet(opts, callback);
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

