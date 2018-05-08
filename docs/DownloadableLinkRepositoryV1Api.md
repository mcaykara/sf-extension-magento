# magento.DownloadableLinkRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadableLinkRepositoryV1DeleteDelete**](DownloadableLinkRepositoryV1Api.md#downloadableLinkRepositoryV1DeleteDelete) | **DELETE** /V1/products/downloadable-links/{id} | 
[**downloadableLinkRepositoryV1GetListGet**](DownloadableLinkRepositoryV1Api.md#downloadableLinkRepositoryV1GetListGet) | **GET** /V1/products/{sku}/downloadable-links | 
[**downloadableLinkRepositoryV1SavePost**](DownloadableLinkRepositoryV1Api.md#downloadableLinkRepositoryV1SavePost) | **POST** /V1/products/{sku}/downloadable-links | 
[**downloadableLinkRepositoryV1SavePut**](DownloadableLinkRepositoryV1Api.md#downloadableLinkRepositoryV1SavePut) | **PUT** /V1/products/{sku}/downloadable-links/{id} | 


<a name="downloadableLinkRepositoryV1DeleteDelete"></a>
# **downloadableLinkRepositoryV1DeleteDelete**
> &#39;Boolean&#39; downloadableLinkRepositoryV1DeleteDelete(id)



Delete downloadable link

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableLinkRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableLinkRepositoryV1DeleteDelete(id, callback);
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

<a name="downloadableLinkRepositoryV1GetListGet"></a>
# **downloadableLinkRepositoryV1GetListGet**
> [DownloadableDataLinkInterface] downloadableLinkRepositoryV1GetListGet(sku)



List of links with associated samples

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableLinkRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableLinkRepositoryV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[DownloadableDataLinkInterface]**](DownloadableDataLinkInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="downloadableLinkRepositoryV1SavePost"></a>
# **downloadableLinkRepositoryV1SavePost**
> &#39;Number&#39; downloadableLinkRepositoryV1SavePost(sku, opts)



Update downloadable link of the given product (link type and its resources cannot be changed)

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body78() // Body78 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableLinkRepositoryV1SavePost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body78**](Body78.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="downloadableLinkRepositoryV1SavePut"></a>
# **downloadableLinkRepositoryV1SavePut**
> &#39;Number&#39; downloadableLinkRepositoryV1SavePut(sku, id, opts)



Update downloadable link of the given product (link type and its resources cannot be changed)

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DownloadableLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body79() // Body79 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadableLinkRepositoryV1SavePut(sku, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Body79**](Body79.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

