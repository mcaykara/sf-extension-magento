# magento.ConfigurableProductOptionRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurableProductOptionRepositoryV1DeleteByIdDelete**](ConfigurableProductOptionRepositoryV1Api.md#configurableProductOptionRepositoryV1DeleteByIdDelete) | **DELETE** /V1/configurable-products/{sku}/options/{id} | 
[**configurableProductOptionRepositoryV1GetGet**](ConfigurableProductOptionRepositoryV1Api.md#configurableProductOptionRepositoryV1GetGet) | **GET** /V1/configurable-products/{sku}/options/{id} | 
[**configurableProductOptionRepositoryV1GetListGet**](ConfigurableProductOptionRepositoryV1Api.md#configurableProductOptionRepositoryV1GetListGet) | **GET** /V1/configurable-products/{sku}/options/all | 
[**configurableProductOptionRepositoryV1SavePost**](ConfigurableProductOptionRepositoryV1Api.md#configurableProductOptionRepositoryV1SavePost) | **POST** /V1/configurable-products/{sku}/options | 
[**configurableProductOptionRepositoryV1SavePut**](ConfigurableProductOptionRepositoryV1Api.md#configurableProductOptionRepositoryV1SavePut) | **PUT** /V1/configurable-products/{sku}/options/{id} | 


<a name="configurableProductOptionRepositoryV1DeleteByIdDelete"></a>
# **configurableProductOptionRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; configurableProductOptionRepositoryV1DeleteByIdDelete(sku, id)



Remove option from configurable product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductOptionRepositoryV1DeleteByIdDelete(sku, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductOptionRepositoryV1GetGet"></a>
# **configurableProductOptionRepositoryV1GetGet**
> ConfigurableProductDataOptionInterface configurableProductOptionRepositoryV1GetGet(sku, id)



Get option for configurable product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductOptionRepositoryV1GetGet(sku, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**ConfigurableProductDataOptionInterface**](ConfigurableProductDataOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductOptionRepositoryV1GetListGet"></a>
# **configurableProductOptionRepositoryV1GetListGet**
> [ConfigurableProductDataOptionInterface] configurableProductOptionRepositoryV1GetListGet(sku)



Get all options for configurable product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductOptionRepositoryV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[ConfigurableProductDataOptionInterface]**](ConfigurableProductDataOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductOptionRepositoryV1SavePost"></a>
# **configurableProductOptionRepositoryV1SavePost**
> &#39;Number&#39; configurableProductOptionRepositoryV1SavePost(sku, opts)



Save option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body112() // Body112 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductOptionRepositoryV1SavePost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body112**](Body112.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductOptionRepositoryV1SavePut"></a>
# **configurableProductOptionRepositoryV1SavePut**
> &#39;Number&#39; configurableProductOptionRepositoryV1SavePut(sku, id, opts)



Save option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body111() // Body111 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductOptionRepositoryV1SavePut(sku, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Body111**](Body111.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

