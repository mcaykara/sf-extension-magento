# magento.SalesRuleRuleRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesRuleRuleRepositoryV1DeleteByIdDelete**](SalesRuleRuleRepositoryV1Api.md#salesRuleRuleRepositoryV1DeleteByIdDelete) | **DELETE** /V1/salesRules/{ruleId} | 
[**salesRuleRuleRepositoryV1GetByIdGet**](SalesRuleRuleRepositoryV1Api.md#salesRuleRuleRepositoryV1GetByIdGet) | **GET** /V1/salesRules/{ruleId} | 
[**salesRuleRuleRepositoryV1GetListGet**](SalesRuleRuleRepositoryV1Api.md#salesRuleRuleRepositoryV1GetListGet) | **GET** /V1/salesRules/search | 
[**salesRuleRuleRepositoryV1SavePost**](SalesRuleRuleRepositoryV1Api.md#salesRuleRuleRepositoryV1SavePost) | **POST** /V1/salesRules | 
[**salesRuleRuleRepositoryV1SavePut**](SalesRuleRuleRepositoryV1Api.md#salesRuleRuleRepositoryV1SavePut) | **PUT** /V1/salesRules/{ruleId} | 


<a name="salesRuleRuleRepositoryV1DeleteByIdDelete"></a>
# **salesRuleRuleRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; salesRuleRuleRepositoryV1DeleteByIdDelete(ruleId)



Delete rule by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleRuleRepositoryV1Api();

var ruleId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleRuleRepositoryV1DeleteByIdDelete(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleRuleRepositoryV1GetByIdGet"></a>
# **salesRuleRuleRepositoryV1GetByIdGet**
> SalesRuleDataRuleInterface salesRuleRuleRepositoryV1GetByIdGet(ruleId)



Get rule by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleRuleRepositoryV1Api();

var ruleId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleRuleRepositoryV1GetByIdGet(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **Number**|  | 

### Return type

[**SalesRuleDataRuleInterface**](SalesRuleDataRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleRuleRepositoryV1GetListGet"></a>
# **salesRuleRuleRepositoryV1GetListGet**
> SalesRuleDataRuleSearchResultInterface salesRuleRuleRepositoryV1GetListGet(opts)



Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleRuleRepositoryV1Api();

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
apiInstance.salesRuleRuleRepositoryV1GetListGet(opts, callback);
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

[**SalesRuleDataRuleSearchResultInterface**](SalesRuleDataRuleSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleRuleRepositoryV1SavePost"></a>
# **salesRuleRuleRepositoryV1SavePost**
> SalesRuleDataRuleInterface salesRuleRuleRepositoryV1SavePost(opts)



Save sales rule.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleRuleRepositoryV1Api();

var opts = { 
  'body': new magento.Body100() // Body100 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleRuleRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body100**](Body100.md)|  | [optional] 

### Return type

[**SalesRuleDataRuleInterface**](SalesRuleDataRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleRuleRepositoryV1SavePut"></a>
# **salesRuleRuleRepositoryV1SavePut**
> SalesRuleDataRuleInterface salesRuleRuleRepositoryV1SavePut(ruleId, opts)



Save sales rule.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleRuleRepositoryV1Api();

var ruleId = "ruleId_example"; // String | 

var opts = { 
  'body': new magento.Body99() // Body99 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleRuleRepositoryV1SavePut(ruleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**|  | 
 **body** | [**Body99**](Body99.md)|  | [optional] 

### Return type

[**SalesRuleDataRuleInterface**](SalesRuleDataRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

