# magento.CatalogProductAttributeMediaGalleryManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeMediaGalleryManagementV1CreatePost**](CatalogProductAttributeMediaGalleryManagementV1Api.md#catalogProductAttributeMediaGalleryManagementV1CreatePost) | **POST** /V1/products/{sku}/media | 
[**catalogProductAttributeMediaGalleryManagementV1GetGet**](CatalogProductAttributeMediaGalleryManagementV1Api.md#catalogProductAttributeMediaGalleryManagementV1GetGet) | **GET** /V1/products/{sku}/media/{entryId} | 
[**catalogProductAttributeMediaGalleryManagementV1GetListGet**](CatalogProductAttributeMediaGalleryManagementV1Api.md#catalogProductAttributeMediaGalleryManagementV1GetListGet) | **GET** /V1/products/{sku}/media | 
[**catalogProductAttributeMediaGalleryManagementV1RemoveDelete**](CatalogProductAttributeMediaGalleryManagementV1Api.md#catalogProductAttributeMediaGalleryManagementV1RemoveDelete) | **DELETE** /V1/products/{sku}/media/{entryId} | 
[**catalogProductAttributeMediaGalleryManagementV1UpdatePut**](CatalogProductAttributeMediaGalleryManagementV1Api.md#catalogProductAttributeMediaGalleryManagementV1UpdatePut) | **PUT** /V1/products/{sku}/media/{entryId} | 


<a name="catalogProductAttributeMediaGalleryManagementV1CreatePost"></a>
# **catalogProductAttributeMediaGalleryManagementV1CreatePost**
> &#39;Number&#39; catalogProductAttributeMediaGalleryManagementV1CreatePost(sku, opts)



Create new gallery entry

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body29() // Body29 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeMediaGalleryManagementV1CreatePost(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body29**](Body29.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeMediaGalleryManagementV1GetGet"></a>
# **catalogProductAttributeMediaGalleryManagementV1GetGet**
> CatalogDataProductAttributeMediaGalleryEntryInterface catalogProductAttributeMediaGalleryManagementV1GetGet(sku, entryId)



Return information about gallery entry

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();

var sku = "sku_example"; // String | 

var entryId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeMediaGalleryManagementV1GetGet(sku, entryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **entryId** | **Number**|  | 

### Return type

[**CatalogDataProductAttributeMediaGalleryEntryInterface**](CatalogDataProductAttributeMediaGalleryEntryInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeMediaGalleryManagementV1GetListGet"></a>
# **catalogProductAttributeMediaGalleryManagementV1GetListGet**
> [CatalogDataProductAttributeMediaGalleryEntryInterface] catalogProductAttributeMediaGalleryManagementV1GetListGet(sku)



Retrieve the list of gallery entries associated with given product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeMediaGalleryManagementV1GetListGet(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**[CatalogDataProductAttributeMediaGalleryEntryInterface]**](CatalogDataProductAttributeMediaGalleryEntryInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeMediaGalleryManagementV1RemoveDelete"></a>
# **catalogProductAttributeMediaGalleryManagementV1RemoveDelete**
> &#39;Boolean&#39; catalogProductAttributeMediaGalleryManagementV1RemoveDelete(sku, entryId)



Remove gallery entry

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();

var sku = "sku_example"; // String | 

var entryId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeMediaGalleryManagementV1RemoveDelete(sku, entryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **entryId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeMediaGalleryManagementV1UpdatePut"></a>
# **catalogProductAttributeMediaGalleryManagementV1UpdatePut**
> &#39;Boolean&#39; catalogProductAttributeMediaGalleryManagementV1UpdatePut(sku, entryId, opts)



Update gallery entry

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();

var sku = "sku_example"; // String | 

var entryId = "entryId_example"; // String | 

var opts = { 
  'body': new magento.Body28() // Body28 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeMediaGalleryManagementV1UpdatePut(sku, entryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **entryId** | **String**|  | 
 **body** | [**Body28**](Body28.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

