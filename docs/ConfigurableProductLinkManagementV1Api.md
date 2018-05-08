# magento.ConfigurableProductLinkManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurableProductLinkManagementV1AddChildPost**](ConfigurableProductLinkManagementV1Api.md#configurableProductLinkManagementV1AddChildPost) | **POST** /V1/configurable-products/{sku}/child | 
[**configurableProductLinkManagementV1GetChildrenGet**](ConfigurableProductLinkManagementV1Api.md#configurableProductLinkManagementV1GetChildrenGet) | **GET** /V1/configurable-products/{sku}/children | 
[**configurableProductLinkManagementV1RemoveChildDelete**](ConfigurableProductLinkManagementV1Api.md#configurableProductLinkManagementV1RemoveChildDelete) | **DELETE** /V1/configurable-products/{sku}/children/{childSku} | 


<a name="configurableProductLinkManagementV1AddChildPost"></a>
# **configurableProductLinkManagementV1AddChildPost**
> &#39;Boolean&#39; configurableProductLinkManagementV1AddChildPost(sku, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body109() // Body109 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductLinkManagementV1AddChildPost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body109**](Body109.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductLinkManagementV1GetChildrenGet"></a>
# **configurableProductLinkManagementV1GetChildrenGet**
> [CatalogDataProductInterface] configurableProductLinkManagementV1GetChildrenGet(sku)



Get all children for Bundle product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductLinkManagementV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductLinkManagementV1GetChildrenGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[CatalogDataProductInterface]**](CatalogDataProductInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="configurableProductLinkManagementV1RemoveChildDelete"></a>
# **configurableProductLinkManagementV1RemoveChildDelete**
> &#39;Boolean&#39; configurableProductLinkManagementV1RemoveChildDelete(sku, childSku)



Remove configurable product option

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.ConfigurableProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var childSku = "childSku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configurableProductLinkManagementV1RemoveChildDelete(sku, childSku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **childSku** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

