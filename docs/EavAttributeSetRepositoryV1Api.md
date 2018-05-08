# magento.EavAttributeSetRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eavAttributeSetRepositoryV1DeleteByIdDelete**](EavAttributeSetRepositoryV1Api.md#eavAttributeSetRepositoryV1DeleteByIdDelete) | **DELETE** /V1/eav/attribute-sets/{attributeSetId} | 
[**eavAttributeSetRepositoryV1GetGet**](EavAttributeSetRepositoryV1Api.md#eavAttributeSetRepositoryV1GetGet) | **GET** /V1/eav/attribute-sets/{attributeSetId} | 
[**eavAttributeSetRepositoryV1GetListGet**](EavAttributeSetRepositoryV1Api.md#eavAttributeSetRepositoryV1GetListGet) | **GET** /V1/eav/attribute-sets/list | 
[**eavAttributeSetRepositoryV1SavePut**](EavAttributeSetRepositoryV1Api.md#eavAttributeSetRepositoryV1SavePut) | **PUT** /V1/eav/attribute-sets/{attributeSetId} | 


<a name="eavAttributeSetRepositoryV1DeleteByIdDelete"></a>
# **eavAttributeSetRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; eavAttributeSetRepositoryV1DeleteByIdDelete(attributeSetId)



Remove attribute set by given ID

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.EavAttributeSetRepositoryV1Api();

var attributeSetId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eavAttributeSetRepositoryV1DeleteByIdDelete(attributeSetId, callback);
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

<a name="eavAttributeSetRepositoryV1GetGet"></a>
# **eavAttributeSetRepositoryV1GetGet**
> EavDataAttributeSetInterface eavAttributeSetRepositoryV1GetGet(attributeSetId)



Retrieve attribute set information based on given ID

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.EavAttributeSetRepositoryV1Api();

var attributeSetId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eavAttributeSetRepositoryV1GetGet(attributeSetId, callback);
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

<a name="eavAttributeSetRepositoryV1GetListGet"></a>
# **eavAttributeSetRepositoryV1GetListGet**
> EavDataAttributeSetSearchResultsInterface eavAttributeSetRepositoryV1GetListGet(opts)



Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.EavAttributeSetRepositoryV1Api();

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
apiInstance.eavAttributeSetRepositoryV1GetListGet(opts, callback);
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

<a name="eavAttributeSetRepositoryV1SavePut"></a>
# **eavAttributeSetRepositoryV1SavePut**
> EavDataAttributeSetInterface eavAttributeSetRepositoryV1SavePut(attributeSetId, opts)



Save attribute set data

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.EavAttributeSetRepositoryV1Api();

var attributeSetId = "attributeSetId_example"; // String | 

var opts = { 
  'body': new magento.Body() // Body | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eavAttributeSetRepositoryV1SavePut(attributeSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **String**|  | 
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

[**EavDataAttributeSetInterface**](EavDataAttributeSetInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

