# magento.CatalogInventoryStockRegistryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogInventoryStockRegistryV1GetLowStockItemsGet**](CatalogInventoryStockRegistryV1Api.md#catalogInventoryStockRegistryV1GetLowStockItemsGet) | **GET** /V1/stockItems/lowStock/ | 
[**catalogInventoryStockRegistryV1GetStockItemBySkuGet**](CatalogInventoryStockRegistryV1Api.md#catalogInventoryStockRegistryV1GetStockItemBySkuGet) | **GET** /V1/stockItems/{productSku} | 
[**catalogInventoryStockRegistryV1GetStockStatusBySkuGet**](CatalogInventoryStockRegistryV1Api.md#catalogInventoryStockRegistryV1GetStockStatusBySkuGet) | **GET** /V1/stockStatuses/{productSku} | 
[**catalogInventoryStockRegistryV1UpdateStockItemBySkuPut**](CatalogInventoryStockRegistryV1Api.md#catalogInventoryStockRegistryV1UpdateStockItemBySkuPut) | **PUT** /V1/products/{productSku}/stockItems/{itemId} | 


<a name="catalogInventoryStockRegistryV1GetLowStockItemsGet"></a>
# **catalogInventoryStockRegistryV1GetLowStockItemsGet**
> CatalogInventoryDataStockStatusCollectionInterface catalogInventoryStockRegistryV1GetLowStockItemsGet(scopeId, qty, opts)



Retrieves a list of SKU&#39;s with low inventory qty

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogInventoryStockRegistryV1Api();

var scopeId = 56; // Number | 

var qty = 8.14; // Number | 

var opts = { 
  'currentPage': 56, // Number | 
  'pageSize': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogInventoryStockRegistryV1GetLowStockItemsGet(scopeId, qty, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeId** | **Number**|  | 
 **qty** | **Number**|  | 
 **currentPage** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**CatalogInventoryDataStockStatusCollectionInterface**](CatalogInventoryDataStockStatusCollectionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogInventoryStockRegistryV1GetStockItemBySkuGet"></a>
# **catalogInventoryStockRegistryV1GetStockItemBySkuGet**
> CatalogInventoryDataStockItemInterface catalogInventoryStockRegistryV1GetStockItemBySkuGet(productSku, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogInventoryStockRegistryV1Api();

var productSku = "productSku_example"; // String | 

var opts = { 
  'scopeId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogInventoryStockRegistryV1GetStockItemBySkuGet(productSku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSku** | **String**|  | 
 **scopeId** | **Number**|  | [optional] 

### Return type

[**CatalogInventoryDataStockItemInterface**](CatalogInventoryDataStockItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogInventoryStockRegistryV1GetStockStatusBySkuGet"></a>
# **catalogInventoryStockRegistryV1GetStockStatusBySkuGet**
> CatalogInventoryDataStockStatusInterface catalogInventoryStockRegistryV1GetStockStatusBySkuGet(productSku, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogInventoryStockRegistryV1Api();

var productSku = "productSku_example"; // String | 

var opts = { 
  'scopeId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogInventoryStockRegistryV1GetStockStatusBySkuGet(productSku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSku** | **String**|  | 
 **scopeId** | **Number**|  | [optional] 

### Return type

[**CatalogInventoryDataStockStatusInterface**](CatalogInventoryDataStockStatusInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogInventoryStockRegistryV1UpdateStockItemBySkuPut"></a>
# **catalogInventoryStockRegistryV1UpdateStockItemBySkuPut**
> &#39;Number&#39; catalogInventoryStockRegistryV1UpdateStockItemBySkuPut(productSku, itemId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogInventoryStockRegistryV1Api();

var productSku = "productSku_example"; // String | 

var itemId = "itemId_example"; // String | 

var opts = { 
  'body': new magento.Body82() // Body82 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut(productSku, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSku** | **String**|  | 
 **itemId** | **String**|  | 
 **body** | [**Body82**](Body82.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

