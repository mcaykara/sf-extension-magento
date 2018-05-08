# magento.CatalogProductAttributeGroupRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeGroupRepositoryV1DeleteByIdDelete**](CatalogProductAttributeGroupRepositoryV1Api.md#catalogProductAttributeGroupRepositoryV1DeleteByIdDelete) | **DELETE** /V1/products/attribute-sets/groups/{groupId} | 
[**catalogProductAttributeGroupRepositoryV1GetListGet**](CatalogProductAttributeGroupRepositoryV1Api.md#catalogProductAttributeGroupRepositoryV1GetListGet) | **GET** /V1/products/attribute-sets/groups/list | 
[**catalogProductAttributeGroupRepositoryV1SavePost**](CatalogProductAttributeGroupRepositoryV1Api.md#catalogProductAttributeGroupRepositoryV1SavePost) | **POST** /V1/products/attribute-sets/groups | 
[**catalogProductAttributeGroupRepositoryV1SavePut**](CatalogProductAttributeGroupRepositoryV1Api.md#catalogProductAttributeGroupRepositoryV1SavePut) | **PUT** /V1/products/attribute-sets/{attributeSetId}/groups | 


<a name="catalogProductAttributeGroupRepositoryV1DeleteByIdDelete"></a>
# **catalogProductAttributeGroupRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; catalogProductAttributeGroupRepositoryV1DeleteByIdDelete(groupId)



Remove attribute group by id

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeGroupRepositoryV1Api();

var groupId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeGroupRepositoryV1GetListGet"></a>
# **catalogProductAttributeGroupRepositoryV1GetListGet**
> EavDataAttributeGroupSearchResultsInterface catalogProductAttributeGroupRepositoryV1GetListGet(opts)



Retrieve list of attribute groups

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeGroupRepositoryV1Api();

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
apiInstance.catalogProductAttributeGroupRepositoryV1GetListGet(opts, callback);
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

[**EavDataAttributeGroupSearchResultsInterface**](EavDataAttributeGroupSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeGroupRepositoryV1SavePost"></a>
# **catalogProductAttributeGroupRepositoryV1SavePost**
> EavDataAttributeGroupInterface catalogProductAttributeGroupRepositoryV1SavePost(opts)



Save attribute group

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeGroupRepositoryV1Api();

var opts = { 
  'body': new magento.Body25() // Body25 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeGroupRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body25**](Body25.md)|  | [optional] 

### Return type

[**EavDataAttributeGroupInterface**](EavDataAttributeGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeGroupRepositoryV1SavePut"></a>
# **catalogProductAttributeGroupRepositoryV1SavePut**
> EavDataAttributeGroupInterface catalogProductAttributeGroupRepositoryV1SavePut(attributeSetId, opts)



Save attribute group

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeGroupRepositoryV1Api();

var attributeSetId = "attributeSetId_example"; // String | 

var opts = { 
  'body': new magento.Body26() // Body26 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeGroupRepositoryV1SavePut(attributeSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **String**|  | 
 **body** | [**Body26**](Body26.md)|  | [optional] 

### Return type

[**EavDataAttributeGroupInterface**](EavDataAttributeGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

