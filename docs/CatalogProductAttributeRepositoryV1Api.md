# magento.CatalogProductAttributeRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeRepositoryV1DeleteByIdDelete**](CatalogProductAttributeRepositoryV1Api.md#catalogProductAttributeRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/attributes/{attributeCode} | 
[**catalogProductAttributeRepositoryV1GetGet**](CatalogProductAttributeRepositoryV1Api.md#catalogProductAttributeRepositoryV1GetGet) | **GET** /V1/products/attributes/{attributeCode} | 
[**catalogProductAttributeRepositoryV1GetListGet**](CatalogProductAttributeRepositoryV1Api.md#catalogProductAttributeRepositoryV1GetListGet) | **GET** /V1/products/attributes | 
[**catalogProductAttributeRepositoryV1SavePost**](CatalogProductAttributeRepositoryV1Api.md#catalogProductAttributeRepositoryV1SavePost) | **POST** /V1/products/attributes | 
[**catalogProductAttributeRepositoryV1SavePut**](CatalogProductAttributeRepositoryV1Api.md#catalogProductAttributeRepositoryV1SavePut) | **PUT** /V1/products/attributes/{attributeCode} | 


<a name="catalogProductAttributeRepositoryV1DeleteByIdDelete"></a>
# **catalogProductAttributeRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogProductAttributeRepositoryV1DeleteByIdDelete(attributeCode)



Delete Attribute by id

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeRepositoryV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeRepositoryV1DeleteByIdDelete(attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeRepositoryV1GetGet"></a>
# **catalogProductAttributeRepositoryV1GetGet**
> CatalogDataProductAttributeInterface catalogProductAttributeRepositoryV1GetGet(attributeCode)



Retrieve specific attribute

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeRepositoryV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeRepositoryV1GetGet(attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 

### Return type

[**CatalogDataProductAttributeInterface**](CatalogDataProductAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeRepositoryV1GetListGet"></a>
# **catalogProductAttributeRepositoryV1GetListGet**
> CatalogDataProductAttributeSearchResultsInterface catalogProductAttributeRepositoryV1GetListGet(opts)



Retrieve all attributes for entity type

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeRepositoryV1Api();

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
apiInstance.catalogProductAttributeRepositoryV1GetListGet(opts, callback);
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

[**CatalogDataProductAttributeSearchResultsInterface**](CatalogDataProductAttributeSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeRepositoryV1SavePost"></a>
# **catalogProductAttributeRepositoryV1SavePost**
> CatalogDataProductAttributeInterface catalogProductAttributeRepositoryV1SavePost(opts)



Save attribute data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeRepositoryV1Api();

var opts = { 
  'body': new magento.Body21() // Body21 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body21**](Body21.md)|  | [optional] 

### Return type

[**CatalogDataProductAttributeInterface**](CatalogDataProductAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeRepositoryV1SavePut"></a>
# **catalogProductAttributeRepositoryV1SavePut**
> CatalogDataProductAttributeInterface catalogProductAttributeRepositoryV1SavePut(attributeCode, opts)



Save attribute data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeRepositoryV1Api();

var attributeCode = "attributeCode_example"; // String | 

var opts = { 
  'body': new magento.Body20() // Body20 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeRepositoryV1SavePut(attributeCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 
 **body** | [**Body20**](Body20.md)|  | [optional] 

### Return type

[**CatalogDataProductAttributeInterface**](CatalogDataProductAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

