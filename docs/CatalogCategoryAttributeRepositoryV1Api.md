# magento.CatalogCategoryAttributeRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryAttributeRepositoryV1GetGet**](CatalogCategoryAttributeRepositoryV1Api.md#catalogCategoryAttributeRepositoryV1GetGet) | **GET** /V1/categories/attributes/{attributeCode} | 
[**catalogCategoryAttributeRepositoryV1GetListGet**](CatalogCategoryAttributeRepositoryV1Api.md#catalogCategoryAttributeRepositoryV1GetListGet) | **GET** /V1/categories/attributes | 


<a name="catalogCategoryAttributeRepositoryV1GetGet"></a>
# **catalogCategoryAttributeRepositoryV1GetGet**
> CatalogDataCategoryAttributeInterface catalogCategoryAttributeRepositoryV1GetGet(attributeCode)



Retrieve specific attribute

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryAttributeRepositoryV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryAttributeRepositoryV1GetGet(attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 

### Return type

[**CatalogDataCategoryAttributeInterface**](CatalogDataCategoryAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogCategoryAttributeRepositoryV1GetListGet"></a>
# **catalogCategoryAttributeRepositoryV1GetListGet**
> CatalogDataCategoryAttributeSearchResultsInterface catalogCategoryAttributeRepositoryV1GetListGet(opts)



Retrieve all attributes for entity type

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryAttributeRepositoryV1Api();

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
apiInstance.catalogCategoryAttributeRepositoryV1GetListGet(opts, callback);
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

[**CatalogDataCategoryAttributeSearchResultsInterface**](CatalogDataCategoryAttributeSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

