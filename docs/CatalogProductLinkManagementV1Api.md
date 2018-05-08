# magento.CatalogProductLinkManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductLinkManagementV1GetLinkedItemsByTypeGet**](CatalogProductLinkManagementV1Api.md#catalogProductLinkManagementV1GetLinkedItemsByTypeGet) | **GET** /V1/products/{sku}/links/{type} | 
[**catalogProductLinkManagementV1SetProductLinksPost**](CatalogProductLinkManagementV1Api.md#catalogProductLinkManagementV1SetProductLinksPost) | **POST** /V1/products/{sku}/links | 


<a name="catalogProductLinkManagementV1GetLinkedItemsByTypeGet"></a>
# **catalogProductLinkManagementV1GetLinkedItemsByTypeGet**
> [CatalogDataProductLinkInterface] catalogProductLinkManagementV1GetLinkedItemsByTypeGet(sku, type)



Provide the list of links for a specific product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var type = "type_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkManagementV1GetLinkedItemsByTypeGet(sku, type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **type** | **String**|  | 

### Return type

[**[CatalogDataProductLinkInterface]**](CatalogDataProductLinkInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductLinkManagementV1SetProductLinksPost"></a>
# **catalogProductLinkManagementV1SetProductLinksPost**
> &#39;Boolean&#39; catalogProductLinkManagementV1SetProductLinksPost(sku, opts)



Assign a product link to another product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductLinkManagementV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body36() // Body36 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductLinkManagementV1SetProductLinksPost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body36**](Body36.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

