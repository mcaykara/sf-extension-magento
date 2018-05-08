# magento.CatalogProductTierPriceManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductTierPriceManagementV1AddPost**](CatalogProductTierPriceManagementV1Api.md#catalogProductTierPriceManagementV1AddPost) | **POST** /V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}/price/{price} | 
[**catalogProductTierPriceManagementV1GetListGet**](CatalogProductTierPriceManagementV1Api.md#catalogProductTierPriceManagementV1GetListGet) | **GET** /V1/products/{sku}/group-prices/{customerGroupId}/tiers | 
[**catalogProductTierPriceManagementV1RemoveDelete**](CatalogProductTierPriceManagementV1Api.md#catalogProductTierPriceManagementV1RemoveDelete) | **DELETE** /V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty} | 


<a name="catalogProductTierPriceManagementV1AddPost"></a>
# **catalogProductTierPriceManagementV1AddPost**
> &#39;Boolean&#39; catalogProductTierPriceManagementV1AddPost(sku, customerGroupId, price, qty)



Create tier price for product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductTierPriceManagementV1Api();

var sku = "sku_example"; // String | 

var customerGroupId = "customerGroupId_example"; // String | 'all' can be used to specify 'ALL GROUPS'

var price = 8.14; // Number | 

var qty = 8.14; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductTierPriceManagementV1AddPost(sku, customerGroupId, price, qty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **customerGroupId** | **String**| &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39; | 
 **price** | **Number**|  | 
 **qty** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductTierPriceManagementV1GetListGet"></a>
# **catalogProductTierPriceManagementV1GetListGet**
> [CatalogDataProductTierPriceInterface] catalogProductTierPriceManagementV1GetListGet(sku, customerGroupId)



Get tier price of product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductTierPriceManagementV1Api();

var sku = "sku_example"; // String | 

var customerGroupId = "customerGroupId_example"; // String | 'all' can be used to specify 'ALL GROUPS'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductTierPriceManagementV1GetListGet(sku, customerGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **customerGroupId** | **String**| &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39; | 

### Return type

[**[CatalogDataProductTierPriceInterface]**](CatalogDataProductTierPriceInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductTierPriceManagementV1RemoveDelete"></a>
# **catalogProductTierPriceManagementV1RemoveDelete**
> &#39;Boolean&#39; catalogProductTierPriceManagementV1RemoveDelete(sku, customerGroupId, qty)



Remove tier price from product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductTierPriceManagementV1Api();

var sku = "sku_example"; // String | 

var customerGroupId = "customerGroupId_example"; // String | 'all' can be used to specify 'ALL GROUPS'

var qty = 8.14; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductTierPriceManagementV1RemoveDelete(sku, customerGroupId, qty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **customerGroupId** | **String**| &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39; | 
 **qty** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

