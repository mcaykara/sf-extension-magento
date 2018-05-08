# magento.BundleProductLinkManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleProductLinkManagementV1AddChildByProductSkuPost**](BundleProductLinkManagementV1Api.md#bundleProductLinkManagementV1AddChildByProductSkuPost) | **POST** /V1/bundle-products/{sku}/links/{optionId} | 
[**bundleProductLinkManagementV1GetChildrenGet**](BundleProductLinkManagementV1Api.md#bundleProductLinkManagementV1GetChildrenGet) | **GET** /V1/bundle-products/{productSku}/children | 
[**bundleProductLinkManagementV1RemoveChildDelete**](BundleProductLinkManagementV1Api.md#bundleProductLinkManagementV1RemoveChildDelete) | **DELETE** /V1/bundle-products/{sku}/options/{optionId}/children/{childSku} | 
[**bundleProductLinkManagementV1SaveChildPut**](BundleProductLinkManagementV1Api.md#bundleProductLinkManagementV1SaveChildPut) | **PUT** /V1/bundle-products/{sku}/links/{id} | 


<a name="bundleProductLinkManagementV1AddChildByProductSkuPost"></a>
# **bundleProductLinkManagementV1AddChildByProductSkuPost**
> &#39;Number&#39; bundleProductLinkManagementV1AddChildByProductSkuPost(sku, optionId, opts)



Add child product to specified Bundle option by product sku

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 

var opts = { 
  'body': new magento.Body125() // Body125 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductLinkManagementV1AddChildByProductSkuPost(sku, optionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **optionId** | **Number**|  | 
 **body** | [**Body125**](Body125.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bundleProductLinkManagementV1GetChildrenGet"></a>
# **bundleProductLinkManagementV1GetChildrenGet**
> [BundleDataLinkInterface] bundleProductLinkManagementV1GetChildrenGet(productSku, opts)



Get all children for Bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductLinkManagementV1Api();

var productSku = "productSku_example"; // String | 

var opts = { 
  'optionId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductLinkManagementV1GetChildrenGet(productSku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSku** | **String**|  | 
 **optionId** | **Number**|  | [optional] 

### Return type

[**[BundleDataLinkInterface]**](BundleDataLinkInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bundleProductLinkManagementV1RemoveChildDelete"></a>
# **bundleProductLinkManagementV1RemoveChildDelete**
> &#39;Boolean&#39; bundleProductLinkManagementV1RemoveChildDelete(sku, optionId, childSku)



Remove product from Bundle product option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var optionId = 56; // Number | 

var childSku = "childSku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductLinkManagementV1RemoveChildDelete(sku, optionId, childSku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **optionId** | **Number**|  | 
 **childSku** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bundleProductLinkManagementV1SaveChildPut"></a>
# **bundleProductLinkManagementV1SaveChildPut**
> &#39;Boolean&#39; bundleProductLinkManagementV1SaveChildPut(sku, id, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body126() // Body126 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductLinkManagementV1SaveChildPut(sku, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Body126**](Body126.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

