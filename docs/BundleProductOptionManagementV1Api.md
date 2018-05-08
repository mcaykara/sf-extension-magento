# magento.BundleProductOptionManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleProductOptionManagementV1SavePost**](BundleProductOptionManagementV1Api.md#bundleProductOptionManagementV1SavePost) | **POST** /V1/bundle-products/options/add | 
[**bundleProductOptionManagementV1SavePut**](BundleProductOptionManagementV1Api.md#bundleProductOptionManagementV1SavePut) | **PUT** /V1/bundle-products/options/{optionId} | 


<a name="bundleProductOptionManagementV1SavePost"></a>
# **bundleProductOptionManagementV1SavePost**
> &#39;Number&#39; bundleProductOptionManagementV1SavePost(opts)



Add new option for bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionManagementV1Api();

var opts = { 
  'body': new magento.Body127() // Body127 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionManagementV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body127**](Body127.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bundleProductOptionManagementV1SavePut"></a>
# **bundleProductOptionManagementV1SavePut**
> &#39;Number&#39; bundleProductOptionManagementV1SavePut(optionId, opts)



Add new option for bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionManagementV1Api();

var optionId = "optionId_example"; // String | 

var opts = { 
  'body': new magento.Body128() // Body128 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionManagementV1SavePut(optionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionId** | **String**|  | 
 **body** | [**Body128**](Body128.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

