# magento.CatalogAttributeSetRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogAttributeSetRepositoryV1DeleteByIdDelete**](CatalogAttributeSetRepositoryV1Api.md#catalogAttributeSetRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/attribute-sets/{attributeSetId} | 
[**catalogAttributeSetRepositoryV1GetGet**](CatalogAttributeSetRepositoryV1Api.md#catalogAttributeSetRepositoryV1GetGet) | **GET** /V1/products/attribute-sets/{attributeSetId} | 
[**catalogAttributeSetRepositoryV1GetListGet**](CatalogAttributeSetRepositoryV1Api.md#catalogAttributeSetRepositoryV1GetListGet) | **GET** /V1/products/attribute-sets/sets/list | 
[**catalogAttributeSetRepositoryV1SavePut**](CatalogAttributeSetRepositoryV1Api.md#catalogAttributeSetRepositoryV1SavePut) | **PUT** /V1/products/attribute-sets/{attributeSetId} | 


<a name="catalogAttributeSetRepositoryV1DeleteByIdDelete"></a>
# **catalogAttributeSetRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogAttributeSetRepositoryV1DeleteByIdDelete(attributeSetId)



Remove attribute set by given ID

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogAttributeSetRepositoryV1Api();

var attributeSetId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogAttributeSetRepositoryV1DeleteByIdDelete(attributeSetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogAttributeSetRepositoryV1GetGet"></a>
# **catalogAttributeSetRepositoryV1GetGet**
> EavDataAttributeSetInterface catalogAttributeSetRepositoryV1GetGet(attributeSetId)



Retrieve attribute set information based on given ID

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogAttributeSetRepositoryV1Api();

var attributeSetId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogAttributeSetRepositoryV1GetGet(attributeSetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **Number**|  | 

### Return type

[**EavDataAttributeSetInterface**](EavDataAttributeSetInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogAttributeSetRepositoryV1GetListGet"></a>
# **catalogAttributeSetRepositoryV1GetListGet**
> EavDataAttributeSetSearchResultsInterface catalogAttributeSetRepositoryV1GetListGet(opts)



Retrieve list of Attribute Sets

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogAttributeSetRepositoryV1Api();

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
apiInstance.catalogAttributeSetRepositoryV1GetListGet(opts, callback);
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

[**EavDataAttributeSetSearchResultsInterface**](EavDataAttributeSetSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogAttributeSetRepositoryV1SavePut"></a>
# **catalogAttributeSetRepositoryV1SavePut**
> EavDataAttributeSetInterface catalogAttributeSetRepositoryV1SavePut(attributeSetId, opts)



Save attribute set data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogAttributeSetRepositoryV1Api();

var attributeSetId = "attributeSetId_example"; // String | 

var opts = { 
  'body': new magento.Body22() // Body22 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogAttributeSetRepositoryV1SavePut(attributeSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **String**|  | 
 **body** | [**Body22**](Body22.md)|  | [optional] 

### Return type

[**EavDataAttributeSetInterface**](EavDataAttributeSetInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

