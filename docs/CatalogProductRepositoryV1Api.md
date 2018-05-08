# magento.CatalogProductRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductRepositoryV1DeleteByIdDelete**](CatalogProductRepositoryV1Api.md#catalogProductRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/{sku} | 
[**catalogProductRepositoryV1GetGet**](CatalogProductRepositoryV1Api.md#catalogProductRepositoryV1GetGet) | **GET** /V1/products/{sku} | 
[**catalogProductRepositoryV1GetListGet**](CatalogProductRepositoryV1Api.md#catalogProductRepositoryV1GetListGet) | **GET** /V1/products | 
[**catalogProductRepositoryV1SavePost**](CatalogProductRepositoryV1Api.md#catalogProductRepositoryV1SavePost) | **POST** /V1/products | 
[**catalogProductRepositoryV1SavePut**](CatalogProductRepositoryV1Api.md#catalogProductRepositoryV1SavePut) | **PUT** /V1/products/{sku} | 


<a name="catalogProductRepositoryV1DeleteByIdDelete"></a>
# **catalogProductRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogProductRepositoryV1DeleteByIdDelete(sku)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductRepositoryV1Api();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductRepositoryV1DeleteByIdDelete(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductRepositoryV1GetGet"></a>
# **catalogProductRepositoryV1GetGet**
> CatalogDataProductInterface catalogProductRepositoryV1GetGet(sku, opts)



Get info about product by product SKU

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'editMode': true, // Boolean | 
  'storeId': 56, // Number | 
  'forceReload': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductRepositoryV1GetGet(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **editMode** | **Boolean**|  | [optional] 
 **storeId** | **Number**|  | [optional] 
 **forceReload** | **Boolean**|  | [optional] 

### Return type

[**CatalogDataProductInterface**](CatalogDataProductInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductRepositoryV1GetListGet"></a>
# **catalogProductRepositoryV1GetListGet**
> CatalogDataProductSearchResultsInterface catalogProductRepositoryV1GetListGet(opts)



Get product list

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductRepositoryV1Api();

var opts = { 
  'searchCriteriaFilterGroupsFiltersField': "searchCriteriaFilterGroupsFiltersField_example", // String | Field
  'searchCriteriaFilterGroupsFiltersValue': "searchCriteriaFilterGroupsFiltersValue_example", // String | Value
  'searchCriteriaFilterGroupsFiltersConditionType': "searchCriteriaFilterGroupsFiltersConditionType_example", // String | Condition type
  'searchCriteriaSortOrdersField': "searchCriteriaSortOrdersField_example", // String | Sorting field.
  'searchCriteriaSortOrdersDirection': "searchCriteriaSortOrdersDirection_example", // String | Sorting direction.
  'searchCriteriaPageSize': 56, // Number | Page size.
  'searchCriteriaCurrentPage': 56 // Number | Current page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductRepositoryV1GetListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchCriteriaFilterGroupsFiltersField** | **String**| Field | [optional] 
 **searchCriteriaFilterGroupsFiltersValue** | **String**| Value | [optional] 
 **searchCriteriaFilterGroupsFiltersConditionType** | **String**| Condition type | [optional] 
 **searchCriteriaSortOrdersField** | **String**| Sorting field. | [optional] 
 **searchCriteriaSortOrdersDirection** | **String**| Sorting direction. | [optional] 
 **searchCriteriaPageSize** | **Number**| Page size. | [optional] 
 **searchCriteriaCurrentPage** | **Number**| Current page. | [optional] 

### Return type

[**CatalogDataProductSearchResultsInterface**](CatalogDataProductSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductRepositoryV1SavePost"></a>
# **catalogProductRepositoryV1SavePost**
> CatalogDataProductInterface catalogProductRepositoryV1SavePost(opts)



Create product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductRepositoryV1Api();

var opts = { 
  'body': new magento.Body18() // Body18 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body18**](Body18.md)|  | [optional] 

### Return type

[**CatalogDataProductInterface**](CatalogDataProductInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductRepositoryV1SavePut"></a>
# **catalogProductRepositoryV1SavePut**
> CatalogDataProductInterface catalogProductRepositoryV1SavePut(sku, opts)



Create product

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductRepositoryV1Api();

var sku = "sku_example"; // String | 

var opts = { 
  'body': new magento.Body19() // Body19 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductRepositoryV1SavePut(sku, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 
 **body** | [**Body19**](Body19.md)|  | [optional] 

### Return type

[**CatalogDataProductInterface**](CatalogDataProductInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

