# magento.ConfigurableProductConfigurableProductManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurableProductConfigurableProductManagementV1GenerateVariationPut**](ConfigurableProductConfigurableProductManagementV1Api.md#configurableProductConfigurableProductManagementV1GenerateVariationPut) | **PUT** /V1/configurable-products/variation | 


<a name="configurableProductConfigurableProductManagementV1GenerateVariationPut"></a>
# **configurableProductConfigurableProductManagementV1GenerateVariationPut**
> [CatalogDataProductInterface] configurableProductConfigurableProductManagementV1GenerateVariationPut(opts)



Generate variation based on same product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductConfigurableProductManagementV1Api();

var opts = { 
  'body': new magento.Body110() // Body110 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductConfigurableProductManagementV1GenerateVariationPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body110**](Body110.md)|  | [optional] 

### Return type

[**[CatalogDataProductInterface]**](CatalogDataProductInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

