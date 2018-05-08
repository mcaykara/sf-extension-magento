# magento.CatalogProductCustomOptionRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete**](CatalogProductCustomOptionRepositoryV1Api.md#catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete) | **DELETE** /V1/products/{sku}/options/{optionId} | 
[**catalogProductCustomOptionRepositoryV1GetGet**](CatalogProductCustomOptionRepositoryV1Api.md#catalogProductCustomOptionRepositoryV1GetGet) | **GET** /V1/products/{sku}/options/{optionId} | 
[**catalogProductCustomOptionRepositoryV1GetListGet**](CatalogProductCustomOptionRepositoryV1Api.md#catalogProductCustomOptionRepositoryV1GetListGet) | **GET** /V1/products/{sku}/options | 
[**catalogProductCustomOptionRepositoryV1SavePost**](CatalogProductCustomOptionRepositoryV1Api.md#catalogProductCustomOptionRepositoryV1SavePost) | **POST** /V1/products/options | 
[**catalogProductCustomOptionRepositoryV1SavePut**](CatalogProductCustomOptionRepositoryV1Api.md#catalogProductCustomOptionRepositoryV1SavePut) | **PUT** /V1/products/options/{optionId} | 


<a name="catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete"></a>
# **catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete**
> &#39;Boolean&#39; catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete(sku, optionId)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete(sku, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **optionId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductCustomOptionRepositoryV1GetGet"></a>
# **catalogProductCustomOptionRepositoryV1GetGet**
> CatalogDataProductCustomOptionInterface catalogProductCustomOptionRepositoryV1GetGet(sku, optionId)



Get custom option for a specific product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionRepositoryV1GetGet(sku, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **optionId** | **Number**|  | 

### Return type

[**CatalogDataProductCustomOptionInterface**](CatalogDataProductCustomOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductCustomOptionRepositoryV1GetListGet"></a>
# **catalogProductCustomOptionRepositoryV1GetListGet**
> [CatalogDataProductCustomOptionInterface] catalogProductCustomOptionRepositoryV1GetListGet(sku)



Get the list of custom options for a specific product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionRepositoryV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[CatalogDataProductCustomOptionInterface]**](CatalogDataProductCustomOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductCustomOptionRepositoryV1SavePost"></a>
# **catalogProductCustomOptionRepositoryV1SavePost**
> CatalogDataProductCustomOptionInterface catalogProductCustomOptionRepositoryV1SavePost(opts)



Save custom option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionRepositoryV1Api();

var opts = { 
  'body': new magento.Body33() // Body33 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body33**](Body33.md)|  | [optional] 

### Return type

[**CatalogDataProductCustomOptionInterface**](CatalogDataProductCustomOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductCustomOptionRepositoryV1SavePut"></a>
# **catalogProductCustomOptionRepositoryV1SavePut**
> CatalogDataProductCustomOptionInterface catalogProductCustomOptionRepositoryV1SavePut(optionId, opts)



Save custom option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductCustomOptionRepositoryV1Api();

var optionId = "optionId_example"; // String | 

var opts = { 
  'body': new magento.Body34() // Body34 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductCustomOptionRepositoryV1SavePut(optionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionId** | **String**|  | 
 **body** | [**Body34**](Body34.md)|  | [optional] 

### Return type

[**CatalogDataProductCustomOptionInterface**](CatalogDataProductCustomOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

