# magento.BundleProductOptionRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleProductOptionRepositoryV1DeleteByIdDelete**](BundleProductOptionRepositoryV1Api.md#bundleProductOptionRepositoryV1DeleteByIdDelete) | **DELETE** /V1/bundle-products/{sku}/options/{optionId} | 
[**bundleProductOptionRepositoryV1GetGet**](BundleProductOptionRepositoryV1Api.md#bundleProductOptionRepositoryV1GetGet) | **GET** /V1/bundle-products/{sku}/options/{optionId} | 
[**bundleProductOptionRepositoryV1GetListGet**](BundleProductOptionRepositoryV1Api.md#bundleProductOptionRepositoryV1GetListGet) | **GET** /V1/bundle-products/{sku}/options/all | 


<a name="bundleProductOptionRepositoryV1DeleteByIdDelete"></a>
# **bundleProductOptionRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; bundleProductOptionRepositoryV1DeleteByIdDelete(sku, optionId)



Remove bundle option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionRepositoryV1DeleteByIdDelete(sku, optionId, callback);
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

<a name="bundleProductOptionRepositoryV1GetGet"></a>
# **bundleProductOptionRepositoryV1GetGet**
> BundleDataOptionInterface bundleProductOptionRepositoryV1GetGet(sku, optionId)



Get option for bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionRepositoryV1GetGet(sku, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **optionId** | **Number**|  | 

### Return type

[**BundleDataOptionInterface**](BundleDataOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bundleProductOptionRepositoryV1GetListGet"></a>
# **bundleProductOptionRepositoryV1GetListGet**
> [BundleDataOptionInterface] bundleProductOptionRepositoryV1GetListGet(sku)



Get all options for bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionRepositoryV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[BundleDataOptionInterface]**](BundleDataOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

