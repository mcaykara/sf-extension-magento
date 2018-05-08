# magento.CatalogProductWebsiteLinkRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete**](CatalogProductWebsiteLinkRepositoryV1Api.md#catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/{sku}/websites/{websiteId} | 
[**catalogProductWebsiteLinkRepositoryV1SavePost**](CatalogProductWebsiteLinkRepositoryV1Api.md#catalogProductWebsiteLinkRepositoryV1SavePost) | **POST** /V1/products/{sku}/websites | 
[**catalogProductWebsiteLinkRepositoryV1SavePut**](CatalogProductWebsiteLinkRepositoryV1Api.md#catalogProductWebsiteLinkRepositoryV1SavePut) | **PUT** /V1/products/{sku}/websites | 


<a name="catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete"></a>
# **catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete(sku, websiteId)



Remove the website assignment from the product by product sku

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductWebsiteLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var websiteId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete(sku, websiteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **websiteId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductWebsiteLinkRepositoryV1SavePost"></a>
# **catalogProductWebsiteLinkRepositoryV1SavePost**
> &#39;Boolean&#39; catalogProductWebsiteLinkRepositoryV1SavePost(sku, opts)



Assign a product to the website

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductWebsiteLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body40() // Body40 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductWebsiteLinkRepositoryV1SavePost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body40**](Body40.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductWebsiteLinkRepositoryV1SavePut"></a>
# **catalogProductWebsiteLinkRepositoryV1SavePut**
> &#39;Boolean&#39; catalogProductWebsiteLinkRepositoryV1SavePut(sku, opts)



Assign a product to the website

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductWebsiteLinkRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body39() // Body39 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductWebsiteLinkRepositoryV1SavePut(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body39**](Body39.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

