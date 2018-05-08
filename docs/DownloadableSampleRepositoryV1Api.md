# magento.DownloadableSampleRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadableSampleRepositoryV1DeleteDelete**](DownloadableSampleRepositoryV1Api.md#downloadableSampleRepositoryV1DeleteDelete) | **DELETE** /V1/products/downloadable-links/samples/{id} | 
[**downloadableSampleRepositoryV1GetListGet**](DownloadableSampleRepositoryV1Api.md#downloadableSampleRepositoryV1GetListGet) | **GET** /V1/products/{sku}/downloadable-links/samples | 
[**downloadableSampleRepositoryV1SavePost**](DownloadableSampleRepositoryV1Api.md#downloadableSampleRepositoryV1SavePost) | **POST** /V1/products/{sku}/downloadable-links/samples | 
[**downloadableSampleRepositoryV1SavePut**](DownloadableSampleRepositoryV1Api.md#downloadableSampleRepositoryV1SavePut) | **PUT** /V1/products/{sku}/downloadable-links/samples/{id} | 


<a name="downloadableSampleRepositoryV1DeleteDelete"></a>
# **downloadableSampleRepositoryV1DeleteDelete**
> &#39;Boolean&#39; downloadableSampleRepositoryV1DeleteDelete(id)



Delete downloadable sample

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableSampleRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableSampleRepositoryV1DeleteDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="downloadableSampleRepositoryV1GetListGet"></a>
# **downloadableSampleRepositoryV1GetListGet**
> [DownloadableDataSampleInterface] downloadableSampleRepositoryV1GetListGet(sku)



List of samples for downloadable product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableSampleRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableSampleRepositoryV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[DownloadableDataSampleInterface]**](DownloadableDataSampleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="downloadableSampleRepositoryV1SavePost"></a>
# **downloadableSampleRepositoryV1SavePost**
> &#39;Number&#39; downloadableSampleRepositoryV1SavePost(sku, opts)



Update downloadable sample of the given product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableSampleRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body80() // Body80 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableSampleRepositoryV1SavePost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body80**](Body80.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="downloadableSampleRepositoryV1SavePut"></a>
# **downloadableSampleRepositoryV1SavePut**
> &#39;Number&#39; downloadableSampleRepositoryV1SavePut(sku, id, opts)



Update downloadable sample of the given product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableSampleRepositoryV1Api();

var sku = "sku_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body81() // Body81 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableSampleRepositoryV1SavePut(sku, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Body81**](Body81.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

